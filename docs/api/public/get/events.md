# Get Events

---

# Endpoints

<span class="func-signature">GET /api/events/...</ul>

Retrieve all upcoming events. Optional URL parameters can be used to filter results, for example by date, type, or location.

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