import { ApiError } from "./api.ts";

export const LICENSE_TYPES_API_URL = "https://api.kulturbytes.de/api/choosable-license-types";

export type LicenseType = { key: string; name: string; description: string | null };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function invalidResponse(): never {
  throw new ApiError("The API returned an unexpected data format. Please try again later.");
}

/** Preserve the API's keys, localized text and ordering. */
export function parseLicenseTypes(payload: unknown): LicenseType[] {
  if (!isRecord(payload)) invalidResponse();
  if (payload.status !== undefined && payload.status !== 200) {
    throw new ApiError("The API could not provide the reference data. Please try again later.");
  }
  if (!Array.isArray(payload.data)) invalidResponse();

  const keys = new Set<string>();
  return payload.data.map((item: unknown) => {
    if (
      !isRecord(item) ||
      typeof item.key !== "string" || !item.key.trim() ||
      typeof item.name !== "string" || !item.name.trim() ||
      (item.description != null && typeof item.description !== "string")
    ) invalidResponse();
    if (keys.has(item.key)) invalidResponse();
    keys.add(item.key);

    return { key: item.key, name: item.name, description: item.description ?? null };
  });
}

export function filterLicenseTypes(types: LicenseType[], query: string): LicenseType[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return types;
  return types.filter((type) =>
    [type.key, type.name, type.description ?? ""].some((text) =>
      text.toLowerCase().includes(needle),
    ),
  );
}
