import { ApiError } from "./api.ts";

export const CHOOSABLE_LANGUAGES_API_URL =
  "https://api.kulturbytes.de/api/choosable-languages";

export type ChoosableLanguage = { id: string; name: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function invalidResponse(): never {
  throw new ApiError("The API returned an unexpected data format. Please try again later.");
}

/** Read the localized language list and preserve its API codes and ordering. */
export function parseChoosableLanguages(payload: unknown): ChoosableLanguage[] {
  if (!isRecord(payload)) invalidResponse();
  if (payload.status !== undefined && payload.status !== 200) {
    throw new ApiError("The API could not provide the reference data. Please try again later.");
  }
  if (payload.data === null) return [];
  if (!Array.isArray(payload.data)) invalidResponse();

  const ids = new Set<string>();
  return payload.data.map((item: unknown) => {
    if (
      !isRecord(item) ||
      typeof item.id !== "string" || !item.id.trim() ||
      typeof item.name !== "string" || !item.name.trim()
    ) invalidResponse();
    if (ids.has(item.id)) invalidResponse();
    ids.add(item.id);
    return { id: item.id, name: item.name };
  });
}

/** Standard codes use lowercase letters only; all other codes are special. */
export function groupChoosableLanguages(languages: ChoosableLanguage[]) {
  return {
    standard: languages.filter(({ id }) => /^[a-z]+$/.test(id)),
    special: languages.filter(({ id }) => !/^[a-z]+$/.test(id)),
  };
}

export function filterChoosableLanguages(
  languages: ChoosableLanguage[],
  query: string,
): ChoosableLanguage[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return languages;
  return languages.filter(({ id, name }) =>
    id.toLowerCase().includes(needle) || name.toLowerCase().includes(needle),
  );
}
