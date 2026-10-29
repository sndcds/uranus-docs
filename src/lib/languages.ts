export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "da", name: "Dansk" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];
