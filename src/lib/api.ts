/** An error with a message safe to show to a reader. */
export class ApiError extends Error {}

/** Shared transport for browser-side reference pages. No credentials or cache. */
export async function fetchJson(url: string, signal: AbortSignal): Promise<unknown> {
  const response = await fetch(url, {
    signal,
    cache: "no-store",
    credentials: "omit",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new ApiError(`The API returned HTTP ${response.status}. Please try again.`);
  }

  try {
    return await response.json();
  } catch (error) {
    if (signal.aborted) throw error;
    throw new ApiError("The API did not return valid JSON. Please try again later.");
  }
}
