import { useId, useState } from "react";
import { useApiData } from "../src/hooks/useApiData";
import { LANGUAGES, type Language } from "../src/lib/languages";
import {
  CHOOSABLE_LANGUAGES_API_URL,
  filterChoosableLanguages,
  groupChoosableLanguages,
  parseChoosableLanguages,
} from "../src/lib/choosable-languages";
import "../src/styles/reference-data.css";

export const client = "load";

export default function ChoosableLanguageLookup({
  initialLanguage = "en",
}: {
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [query, setQuery] = useState("");
  const controlId = useId();
  const url = `${CHOOSABLE_LANGUAGES_API_URL}?lang=${language}`;
  const { state, reload } = useApiData(url, parseChoosableLanguages);
  const languages = state.status === "success" ? state.data : [];
  const groups = groupChoosableLanguages(languages);
  const visibleLanguages = filterChoosableLanguages(languages, query);
  const visibleGroups = groupChoosableLanguages(visibleLanguages);

  return (
    <div className="reference-data">
      <div className="reference-data__controls">
        <label htmlFor={`${controlId}-language`}>
          Language names
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
        {state.status === "loading" && <p role="status">Loading languages…</p>}

        {state.status === "error" && (
          <div className="reference-data__message" role="alert">
            <p>{state.message}</p>
            <button type="button" onClick={reload}>Try again</button>
          </div>
        )}

        {state.status === "success" && (
          <>
            <dl className="reference-data__summary">
              <div><dt>Languages</dt><dd>{languages.length}</dd></div>
              <div><dt>Standard codes</dt><dd>{groups.standard.length}</dd></div>
              <div><dt>Special codes</dt><dd>{groups.special.length}</dd></div>
            </dl>

            <label className="reference-data__search" htmlFor={`${controlId}-search`}>
              Search by language name or code
              <input
                id={`${controlId}-search`}
                type="search"
                placeholder="e.g. English or en"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <p className="reference-data__meta" role="status">
              {visibleLanguages.length} of {languages.length} languages shown.
            </p>

            {languages.length === 0 ? (
              <p>The API currently lists no languages for this display language.</p>
            ) : visibleLanguages.length === 0 ? (
              <p>No languages match your search.</p>
            ) : (
              <div lang={language}>
                <section>
                  <h2>Standard languages</h2>
                  <LanguageTable label="Standard languages" languages={visibleGroups.standard} />
                </section>
                <section>
                  <h2>Special languages</h2>
                  <p className="reference-data__meta">
                    Codes containing characters other than lowercase letters appear here.
                  </p>
                  <LanguageTable label="Special languages" languages={visibleGroups.special} />
                </section>
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
        Source: <a href={url}>Uranus API · choosable languages (JSON)</a>
      </p>
    </div>
  );
}

function LanguageTable({
  label,
  languages,
}: {
  label: string;
  languages: { id: string; name: string }[];
}) {
  if (languages.length === 0) return <p>No matching languages in this group.</p>;

  return (
    <div className="reference-data__table">
      <table aria-label={label}>
        <thead lang="en">
          <tr><th scope="col">ISO code</th><th scope="col">Language</th></tr>
        </thead>
        <tbody>
          {languages.map(({ id, name }) => (
            <tr key={id}>
              <th scope="row"><code>{id}</code></th>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
