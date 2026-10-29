import assert from "node:assert/strict";
import { test } from "node:test";
import { ApiError, fetchJson } from "../src/lib/api.ts";
import { filterEventTypes, parseEventTypeGenreLookup } from "../src/lib/event-type-genre.ts";

const types = {
  "10": { name: "Other", genres: null },
  "2": { name: "Theater & Stage" },
  "1": {
    name: "Concert",
    genres: { "1010": "Folk", "1003": "Jazz", "1001": "Electronic music" },
  },
};

test("reads multilingual API data, sorts numeric IDs and retains types without genres", () => {
  const result = parseEventTypeGenreLookup({
    status: 200,
    data: { en: { types }, de: { types: { "1": { name: "Konzert", genres: {} } } } },
  }, "en");

  assert.deepEqual(result.map((type) => type.id), ["1", "2", "10"]);
  assert.deepEqual(result[0].genres.map((genre) => genre.id), ["1001", "1003", "1010"]);
  assert.deepEqual(result[1].genres, []);
  assert.deepEqual(result[2].genres, []);
  assert.equal(result[0].name, "Concert");
});

test("selects German and Danish data rather than silently falling back to English", () => {
  const payload = { data: {
    en: { types },
    de: { types: { "1": { name: "Konzert", genres: {} } } },
    da: { types: { "1": { name: "Koncert", genres: {} } } },
  } };
  assert.equal(parseEventTypeGenreLookup(payload, "de")[0].name, "Konzert");
  assert.equal(parseEventTypeGenreLookup(payload, "da")[0].name, "Koncert");
  assert.throws(() => parseEventTypeGenreLookup({ data: { en: { types } } }, "de"), ApiError);
});

test("accepts localized envelopes and unwrapped responses without changing IDs or text", () => {
  const local = { types: { "0001": { name: "<script>alert(1)</script> & {text}", genres: {} } } };
  for (const payload of [local, { data: local }]) {
    assert.deepEqual(parseEventTypeGenreLookup(payload, "en"), [
      { id: "0001", name: "<script>alert(1)</script> & {text}", genres: [] },
    ]);
  }
  assert.deepEqual(parseEventTypeGenreLookup({ data: { types: {} } }, "en"), []);
});

test("rejects API-level errors and malformed data instead of displaying partial results", () => {
  for (const payload of [
    { status: 500, data: { types } },
    null,
    [],
    { data: { types: [] } },
    { data: { types: { "1": { name: "Concert", genres: ["Jazz"] } } } },
    { data: { types: { "1": { name: 42 } } } },
    { data: { types: { "1": { name: "Concert", genres: { "1003": {} } } } } },
    { data: { types: { invalid: { name: "Concert" } } } },
  ]) {
    assert.throws(() => parseEventTypeGenreLookup(payload, "en"), ApiError);
  }
});

test("filters by type, genre or ID, and keeps all genres when the type itself matches", () => {
  const result = parseEventTypeGenreLookup({ types }, "en");
  assert.deepEqual(filterEventTypes(result, "  CONCERT  "), [result[0]]);
  assert.deepEqual(filterEventTypes(result, "jazz")[0].genres, [{ id: "1003", name: "Jazz" }]);
  assert.deepEqual(filterEventTypes(result, "1003")[0].genres, [{ id: "1003", name: "Jazz" }]);
  assert.deepEqual(filterEventTypes(result, "Theater & Stage"), [result[1]]);
  assert.deepEqual(filterEventTypes(result, "no such genre"), []);
  assert.deepEqual(filterEventTypes(result, "  "), result);
  assert.equal(result[0].genres.length, 3);
});

test("fetches fresh JSON without credentials and preserves cancellation", async (context) => {
  const controller = new AbortController();
  let options;
  context.mock.method(globalThis, "fetch", async (_url, init) => {
    options = init;
    return new Response(JSON.stringify({ status: 200, data: { types } }));
  });

  const payload = await fetchJson("https://api.example.test/lookup", controller.signal);
  assert.equal(parseEventTypeGenreLookup(payload, "en").length, 3);
  assert.equal(options?.cache, "no-store");
  assert.equal(options?.credentials, "omit");
  assert.equal(options?.signal, controller.signal);
  assert.deepEqual(options?.headers, { Accept: "application/json" });
});

test("reports HTTP and invalid JSON failures", async (context) => {
  const mock = context.mock.method(globalThis, "fetch", async () => new Response("Unavailable", { status: 503 }));
  const signal = new AbortController().signal;
  await assert.rejects(fetchJson("https://api.example.test/lookup", signal), /HTTP 503/);
  mock.mock.mockImplementation(async () => new Response("<html>not JSON</html>"));
  await assert.rejects(fetchJson("https://api.example.test/lookup", signal), /valid JSON/);
});

test("does not swallow an aborted request", async (context) => {
  const controller = new AbortController();
  controller.abort();
  context.mock.method(globalThis, "fetch", async (_url, options) => {
    options.signal?.throwIfAborted();
    return new Response("{}");
  });
  await assert.rejects(fetchJson("https://api.example.test/lookup", controller.signal), {
    name: "AbortError",
  });
});
