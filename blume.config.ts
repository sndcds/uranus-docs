import { defineConfig } from "blume";

export default defineConfig({
  title: "Uranus Docs",
  description: "Documentation for the Uranus API.",

  content: {
    root: "docs",
  },

  openapi: {
    enabled: true,
    sources: [
      {
        spec: "docs/openapi/openapi.yaml",
        label: "Uranus Public API",
        route: "/api-reference",
      },
    ],
  },

  navigation: {
    tabs: [
      {
        label: "Public API",
        href: "/api-reference",
        path: ""
      },
    ],
  },
});
