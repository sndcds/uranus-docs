# Use of Standards

Uranus adheres to a range of established web and data standards to ensure interoperability, accessibility, and future-proof integration with external systems and platforms.

By aligning with these standards, Uranus ensures:

- Compatibility with common platforms (CMS, APIs, portals)
- Easy reuse of data across systems
- Improved visibility on the open web (search, aggregators, assistants)
- Better user experience across devices and systems


---

## Schema.org Compatibility

Uranus adopts [schema.org ↗](https://schema.org/) vocabularies to structure event and venue data semantically. This improves machine readability and supports integration with search engines, aggregators, and intelligent assistants.

Examples include:

- Event (for core event information)
- Place and Venue
- Organization (for organizers)
- Person (for contributors or speakers)

This enables search engines to understand and highlight events in rich results.


---

## JSON & JSON-LD

All Uranus API responses are returned in structured [JSON ↗](https://www.json.org/json-en.html), making them easy to parse in virtually any modern programming environment.

Where semantic annotation is beneficial (e.g., for embedding in web pages), [JSON-LD ↗](https://json-ld.org/) (JSON for Linked Data) is supported or can be generated from the API output using schema.org mappings.

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Public Lecture Series",
  "startDate": "2025-09-12T18:00",
  "location": {
    "@type": "Place",
    "name": "Main Hall",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "postalCode": "10115",
      "streetAddress": "Hauptstr. 10"
    }
  }
}
```

---

## WKT & Geo Standards

Uranus supports spatial data using [WKT ↗](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) (Well-Known Text) for representing geographic locations, such as:

- POINT (13.4050 52.5200) — Latitude and longitude in WKT format.

This allows integration with GIS tools and mapping libraries (e.g., [Leaflet ↗](https://leafletjs.com/), [OpenLayers ↗](https://openlayers.org/), [MapLibre ↗](https://maplibre.org/), [QGIS ↗](https://qgis.org/)) with minimal conversion.


---

## SEO & Semantic Tagging

Structured data helps improve Search Engine Optimization (SEO) by enabling:

- Rich search snippets for events, venues, and organizations.
- Better visibility in event-specific search results (e.g., Google Events).
- Indexing by cultural databases, calendars, and aggregators.


---

## Social Metadata (SOME Tags)

Uranus encourages the use of SOME (Social Media) metadata for effective sharing:

- [Open Graph Tags ↗](https://ogp.me/) (used by Facebook, LinkedIn, etc.)
- Twitter Cards (for better event previews on X/Twitter)

```html
<meta property="og:type" content="event" />
<meta property="og:title" content="Art Exhibition Opening" />
<meta property="og:image" content="https://example.org/img.jpg" />
<meta property="og:description" content="Join us for the vernissage of ..." />
```


