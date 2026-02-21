# Get Events

---

# Endpoint

<span class="func-signature">GET /api/events/{optional query parameters}</ul>

Retrieve all upcoming events. Optional query parameters can be used to filter results, for example by date, type, or location.

## Query Parameters

| Parameter              | Type     | Description |
|------------------------|----------|-------------|
| `lang`                 | string   | Language code to filter event content (e.g., `en`, `de`). |
| `past`                 | boolean  | If present, include past events. |
| `start`                | string   | Start date filter (`YYYY-MM-DD`). |
| `end`                  | string   | End date filter (`YYYY-MM-DD`). |
| `time`                 | string   | Filter by event time (`HH:MM` or time range). |
| `search`               | string   | Search term for event title, description, or keywords. |
| `events`               | string   | Comma-separated list of event IDs to include. |
| `venues`               | string   | Comma-separated list of venue IDs. |
| `spaces`               | string   | Comma-separated list of space IDs. |
| `organizers`           | string   | Comma-separated list of organizer IDs. |
| `countries`            | string   | Comma-separated list of country codes (ISO 3166-1 alpha-2). |
| `postal_code`          | string   | Filter by postal code. |
| `lon`                  | number   | Longitude for geospatial filtering. |
| `lat`                  | number   | Latitude for geospatial filtering. |
| `radius`               | number   | Radius in meters for location-based filtering. |
| `space_types`          | string   | Comma-separated list of space type IDs. |
| `title`                | string   | Filter events by title. |
| `city`                 | string   | Filter events by city. |
| `accessibility`        | string   | Comma-separated list of accessibility features (e.g., wheelchair). |
| `visitor_infos`        | string   | Comma-separated list of visitor info filters (e.g., age restrictions). |
| `age`                  | string   | Filter by minimum or exact age. |
| `limit`                | integer  | Limit the number of results returned. |
| `offset`               | integer  | Offset for pagination. |


**URL:** `/api/events`  
**Method:** GET  
**Description:** Returns a list of events with optional filtering, pagination, and expanded fields.

**URL:** `/api/event-type-summary`  
**Method:** GET  
**Description:** Returns a summary of events grouped by event type, including the number of event dates for each type. Filters can be applied as query parameters.

**URL:** `/api/event-venue-summary`
**Method:** GET
**Description:** Returns a summary of events grouped by venue, including the number of event dates per venue. Filters can be applied as query parameters.


### Query Parameters (Filters)

| Filter | Type | Allowed Values / Examples | Notes |
|--------|------|--------------------------|-------|
| `past` | boolean | `true`, `false` | Include past events if `true`. Defaults to future events only. |
| `start` | date string | `YYYY-MM-DD`, e.g., `2026-01-01` | Event start date ≥ this value. |
| `end` | date string | `YYYY-MM-DD`, e.g., `2026-12-31` | Event end date ≤ this value. |
| `last_event_start_at` | timestamp | `YYYY-MM-DDTHH:MM:SSZ` | Pagination: only events after this datetime. |
| `last_event_date_id` | int | `131762` | Pagination: only events after this event_date_id. |
| `time` | string / range | `18:00-21:00` | Filter by start time. |
| `search` | string | `"Lesung"` | Full-text search in title/description. |
| `events` | comma-separated ints | `123,456,789` | Filter by event IDs. |
| `venues` | comma-separated ints | `10,20` | Filter by venue IDs. |
| `spaces` | comma-separated ints | `5,6` | Filter by space IDs. |
| `space_types` | comma-separated ints | `1,2` | Filter by space type IDs. |
| `organizations` | comma-separated ints | `42,43` | Filter by organization IDs. |
| `countries` | comma-separated ISO codes | `DE,DK` | Filter events by venue country. |
| `postal_code` | string | `"24118"` | Filter by postal code. |
| `title` | string | `"Autumn Festival"` | Partial match in event title. |
| `city` | string | `"Berlin"` | Match venue city. |
| `event_types` | JSON array | `[[1,5],[2,null]]` | `[type_id, genre_id]`. Use `null` for genre if not filtered. |
| `tags` | comma-separated strings | `"music,festival,autumn"` | Filter events containing tags. |
| `accessibility` | int (bitmask) | `1`, `2`, `4`, ... | Space accessibility flags. Combine with bitwise OR. |
| `visitor_infos` | int (bitmask) | `1`, `2`, `4`, ... | Visitor info flags. Combine with bitwise OR. |
| `age` | int or range | `12`, `12-99` | Filter events suitable for this age or range. |
| `lon` | float | `13.404954` | Longitude for radius filtering. |
| `lat` | float | `52.520008` | Latitude for radius filtering. |
| `radius` | int (km) | `10` | Radius around lon/lat. |
| `offset` | int | `0`, `50` | Pagination offset. |
| `limit` | int | `10`, `50` | Pagination limit. |
| `language` | string | `"de"`, `"en"` | Filter events by language. |

### Accessibility Flags (bitmask)

| Flag | Value |
|------|-------|
| Wheelchair accessible entrance | 1 |
| Wheelchair accessible WC | 2 |
| Hearing assistance | 4 |
| Visual assistance | 8 |

### Visitor Info Flags (bitmask)

| Flag | Value |
|------|-------|
| Info desk | 1 |
| Guided tour | 2 |
| Workshop available | 4 |

### Sample JSON Response

```json
{
  "events": [
    {
      "event_date_id": 131762,
      "id": 9876,
      "title": "Autumn Music Festival",
      "subtitle": "Experience the sounds of fall",
      "start_date": "2025-10-10",
      "start_time": "12:00",
      "end_date": "2025-10-12",
      "end_time": "22:00",
      "venue_name": "City Park",
      "venue_city": "Berlin",
      "languages": ["en", "de"],
      "tags": ["music", "festival", "autumn"],
      "event_types": [{"type_id": 1, "genre_id": 5}]
    }
  ],
  "last_event_start_at": "2025-10-12T22:00:00",
  "last_event_date_id": 131762
}
```


```json
{
  "summary": [
    {
      "type_id": 1,
      "date_count": 42
    },
    {
      "type_id": 2,
      "date_count": 18
    }
  ]
}
```


```json
{
  "venue-summary": [
    {"venue_id": 10, "venue_name": "Hansa 48 - Saal", "date_count": 12},
    {"venue_id": 20, "venue_name": "City Park Stage", "date_count": 8}
  ]
}
```