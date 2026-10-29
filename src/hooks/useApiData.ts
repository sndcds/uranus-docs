import { useEffect, useState } from "react";
import { ApiError, fetchJson } from "../lib/api";

type ApiState<T> =
  | { status: "loading" }
  | { status: "success"; data: T; loadedAt: Date }
  | { status: "error"; message: string };

/** Keep parse stable with useCallback so rerenders do not refetch the API. */
export function useApiData<T>(url: string, parse: (payload: unknown) => T) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<{ url: string; state: ApiState<T> }>({
    url,
    state: { status: "loading" },
  });

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    let timedOut = false;
    setResult({ url, state: { status: "loading" } });

    const timeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 30_000);

    fetchJson(url, controller.signal)
      .then(parse)
      .then((data) => {
        if (active && !controller.signal.aborted) {
          setResult({ url, state: { status: "success", data, loadedAt: new Date() } });
        }
      })
      .catch((error: unknown) => {
        if (!active) return;
        const message = timedOut
          ? "The API took too long to respond. Please try again."
          : error instanceof ApiError
            ? error.message
            : "Could not reach the API. Check your connection and try again.";
        setResult({ url, state: { status: "error", message } });
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [url, parse, attempt]);

  // Do not show data from the previous language while the next effect starts.
  const state: ApiState<T> = result.url === url ? result.state : { status: "loading" };
  return { state, reload: () => setAttempt((value) => value + 1) };
}
