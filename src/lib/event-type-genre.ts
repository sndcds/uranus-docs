import { ApiError } from "./api.ts";

export const LOOKUP_API_URL = "https://api.kulturbytes.de/api/event/type-genre-lookup";

export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "da", name: "Dansk" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];
export type Genre = { id: string; name: string };
export type EventType = { id: string; name: string; genres: Genre[] };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function invalidResponse(): never {
  throw new ApiError("The API returned an unexpected data format. Please try again later.");
}

function numericEntries(record: Record<string, unknown>) {
  const entries = Object.entries(record);
  if (entries.some(([id]) => !/^\d+$/.test(id))) invalidResponse();
  return entries.sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true }));
}

/** Accept the API's multilingual envelope and language-specific responses. */
export function parseEventTypeGenreLookup(payload: unknown, language: Language): EventType[] {
  if (!isRecord(payload)) invalidResponse();
  if (payload.status !== undefined && payload.status !== 200) {
    throw new ApiError("The API could not provide the reference data. Please try again later.");
  }

  const data = payload.data ?? payload;
  if (!isRecord(data)) invalidResponse();
  const localized = data[language] ?? data;
  if (!isRecord(localized) || !isRecord(localized.types)) invalidResponse();

  return numericEntries(localized.types).map(([id, item]) => {
    if (!isRecord(item) || typeof item.name !== "string") invalidResponse();
    const genres = item.genres ?? {};
    if (!isRecord(genres)) invalidResponse();

    return {
      id,
      name: item.name,
      genres: numericEntries(genres).map(([genreId, name]) => {
        if (typeof name !== "string") invalidResponse();
        return { id: genreId, name };
      }),
    };
  });
}

/** Type matches keep all their genres; genre matches keep only matching genres. */
export function filterEventTypes(types: EventType[], query: string): EventType[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return types;
  const matches = (entry: Genre) =>
    entry.name.toLowerCase().includes(needle) || entry.id.includes(needle);

  return types.flatMap((type) => {
    if (matches(type)) return [type];
    const genres = type.genres.filter(matches);
    return genres.length ? [{ ...type, genres }] : [];
  });
}
