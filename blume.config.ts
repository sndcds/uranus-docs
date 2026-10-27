import { defineConfig } from "blume";

export default defineConfig({
  title: "Uranus Docs",
  description: "Technical documentation for Uranus and related services.",

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
        label: "Overview",
        path: "/",
      },
      {
        label: "Uranus API",
        path: "/api-reference",
      },
    ],
  },
});
