import { useCallback, useId, useState } from "react";
import { useApiData } from "../src/hooks/useApiData";
import {
  filterEventTypes,
  LOOKUP_API_URL,
  parseEventTypeGenreLookup,
} from "../src/lib/event-type-genre";
import { LANGUAGES, type Language } from "../src/lib/languages";
import "../src/styles/reference-data.css";

// Fetch as soon as the page loads, rather than waiting for it to scroll into view.
export const client = "load";

export default function EventTypeGenreLookup({
  initialLanguage = "en",
}: {
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [query, setQuery] = useState("");
  const controlId = useId();
  const parse = useCallback(
    (payload: unknown) => parseEventTypeGenreLookup(payload, language),
    [language],
  );
  const url = `${LOOKUP_API_URL}?lang=${language}`;
  const { state, reload } = useApiData(url, parse);
  const types = state.status === "success" ? state.data : [];
  const visibleTypes = filterEventTypes(types, query);
  const genreCount = types.reduce((count, type) => count + type.genres.length, 0);
  const typesWithGenres = types.filter((type) => type.genres.length > 0).length;

  return (
    <div className="reference-data">
      <div className="reference-data__controls">
        <label htmlFor={`${controlId}-language`}>
          Data language
          <select
            id={`${controlId}-language`}
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
          >
            {LANGUAGES.map(({ code, name }) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={reload} disabled={state.status === "loading"}>
          Reload data
        </button>
      </div>

      <div aria-busy={state.status === "loading"}>
        {state.status === "loading" && (
          <p role="status">Loading event types and genres…</p>
        )}

        {state.status === "error" && (
          <div className="reference-data__message" role="alert">
            <p>{state.message}</p>
            <button type="button" onClick={reload}>Try again</button>
          </div>
        )}

        {state.status === "success" && (
          <>
            <dl className="reference-data__summary">
              <div><dt>Event types</dt><dd>{types.length}</dd></div>
              <div><dt>Types with genres</dt><dd>{typesWithGenres}</dd></div>
              <div><dt>Genre entries</dt><dd>{genreCount}</dd></div>
            </dl>

            <label className="reference-data__search" htmlFor={`${controlId}-search`}>
              Search names or IDs
              <input
                id={`${controlId}-search`}
                type="search"
                placeholder="e.g. Concert, Jazz or 1003"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <p className="reference-data__meta" role="status">
              {visibleTypes.length} of {types.length} event types shown.
            </p>

            {types.length === 0 ? (
              <p>The API currently lists no event types for this language.</p>
            ) : visibleTypes.length === 0 ? (
              <p>No event types or genres match your search.</p>
            ) : (
              <div className="reference-data__types" lang={language}>
                {visibleTypes.map((type) => (
                  <section className="reference-data__type" key={type.id}>
                    <h2><code>{type.id}</code> {type.name}</h2>
                    {type.genres.length === 0 ? (
                      <p lang="en">No genres associated with this event type.</p>
                    ) : (
                      <ul className="reference-data__genres">
                        {type.genres.map((genre) => (
                          <li key={genre.id}>
                            <code>{genre.id}</code> <span>{genre.name}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            )}

            <p className="reference-data__meta">
              Loaded at <time dateTime={state.loadedAt.toISOString()}>
                {state.loadedAt.toLocaleString("en-GB")}
              </time> (your local time).
            </p>
          </>
        )}
      </div>

      <p className="reference-data__meta">
        Source: <a href={url}>Uranus API · event types and genres (JSON)</a>
      </p>
    </div>
  );
}
