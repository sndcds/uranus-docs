import { useId, useState } from "react";
import { useApiData } from "../src/hooks/useApiData";
import { LANGUAGES, type Language } from "../src/lib/languages";
import {
  filterLicenseTypes,
  LICENSE_TYPES_API_URL,
  parseLicenseTypes,
} from "../src/lib/license-types";
import "../src/styles/reference-data.css";

export const client = "load";

export default function LicenseTypeLookup({
  initialLanguage = "en",
}: {
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [query, setQuery] = useState("");
  const controlId = useId();
  const url = `${LICENSE_TYPES_API_URL}?lang=${language}`;
  const { state, reload } = useApiData(url, parseLicenseTypes);
  const types = state.status === "success" ? state.data : [];
  const visibleTypes = filterLicenseTypes(types, query);

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
        {state.status === "loading" && <p role="status">Loading license types…</p>}

        {state.status === "error" && (
          <div className="reference-data__message" role="alert">
            <p>{state.message}</p>
            <button type="button" onClick={reload}>Try again</button>
          </div>
        )}

        {state.status === "success" && (
          <>
            <label className="reference-data__search" htmlFor={`${controlId}-search`}>
              Search names, keys or descriptions
              <input
                id={`${controlId}-search`}
                type="search"
                placeholder="e.g. Attribution, cc-by or MIT"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <p className="reference-data__meta" role="status">
              {visibleTypes.length} of {types.length} license types shown.
            </p>

            {types.length === 0 ? (
              <p>The API currently lists no license types for this language.</p>
            ) : visibleTypes.length === 0 ? (
              <p>No license types match your search.</p>
            ) : (
              <div className="reference-data__table">
                <table aria-label="License types" lang={language}>
                  <thead lang="en">
                    <tr><th scope="col">Key</th><th scope="col">Name</th></tr>
                  </thead>
                  <tbody>
                    {visibleTypes.map((type) => (
                      <tr key={type.key}>
                        <th scope="row"><code>{type.key}</code></th>
                        <td>
                          {type.name}
                          {type.description && <p>{type.description}</p>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
        Source: <a href={url}>Uranus API · license types (JSON)</a>
      </p>
    </div>
  );
}
