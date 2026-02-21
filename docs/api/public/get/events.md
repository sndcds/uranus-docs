# Get Events

---

# Endpoints

<span class="func-signature">GET /api/events/{optional query parameters}</ul>

Retrieve all upcoming events. Optional query parameters can be used to filter results, for example by date, type, or location.


<span class="func-signature">GET /api/event-type-summary/{optional query parameters}</ul>

Returns a summary of events grouped by event type, including the number of event dates for each type. Filters can be applied as query parameters.


<span class="func-signature">GET /api/event-venue-summary/{optional query parameters}</ul>

Returns a summary of events grouped by venue, including the number of event dates per venue. Filters can be applied as query parameters.



### Query Parameters (Filters)

| Filter | Type | Allowed Values / Examples       | Notes                                                             |
|--------|------|---------------------------------|-------------------------------------------------------------------|
| `past` | boolean | `true`, `false`                 | Include past events if `true`. Defaults to future events only.    |
| `start` | date string | `YYYY-MM-DD`, e.g., `2026-01-01` | Event start date ≥ this value.                                    |
| `end` | date string | `YYYY-MM-DD`, e.g., `2026-12-31` | Event end date ≤ this value.                                      |
| `last_event_start_at` | timestamp | `YYYY-MM-DDTHH:MM:SSZ`          | Pagination: only events after this datetime.                      |
| `last_event_date_id` | int | `131762`                        | Pagination: only events after this event_date_id.                 |
| `time` | string / range | `18:00-21:00`                   | Filter by start time.                                             |
| `search` | string | `"Lesung"`                      | Full-text search in title/description.                            |
| `events` | comma-separated ints | `123,456,789`                   | Filter by event IDs.                                              |
| `venues` | comma-separated ints | `10,20`                         | Filter by venue IDs.                                              |
| `spaces` | comma-separated ints | `5,6`                           | Filter by space IDs.                                              |
| `space_types` | comma-separated ints | `1,2`                           | Filter by space type IDs.                                         |
| `organizations` | comma-separated ints | `42,43`                         | Filter by organization IDs.                                       |
| `countries` | comma-separated ISO codes | `DEU,DNK`                       | Filter events by venue country. ISO 3166-1 Alpha-3 Country Codes. |
| `postal_code` | string | `"24118"`                       | Filter by postal code.                                            |
| `title` | string | `"Autumn Festival"`             | Partial match in event title.                                     |
| `city` | string | `"Berlin"`                      | Match venue city.                                                 |
| `event_types` | JSON array | `[[1,5],[2,null]]`              | `[type_id, genre_id]`. Use `null` for genre if not filtered.      |
| `tags` | comma-separated strings | `"music,festival,autumn"`       | Filter events containing tags.                                    |
| `accessibility` | int (bitmask) | `1`, `2`, `4`, ...              | Space accessibility flags. Combine with bitwise OR.               |
| `visitor_infos` | int (bitmask) | `1`, `2`, `4`, ...              | Visitor info flags. Combine with bitwise OR.                      |
| `age` | int or range | `12`, `12-99`                   | Filter events suitable for this age or range.                     |
| `lon` | float | `13.404954`                     | Longitude for radius filtering.                                   |
| `lat` | float | `52.520008`                     | Latitude for radius filtering.                                    |
| `radius` | int (km) | `10`                            | Radius around lon/lat.                                            |
| `offset` | int | `0`, `50`                       | Pagination offset.                                                |
| `limit` | int | `10`, `50`                      | Pagination limit.                                                 |
| `language` | string | `"de"`, `"en"`                  | Filter events by language.                                        |


### Accessibility Flags (bitmask)

### Accessibility Flags (bitmask)

| Flag | ID | Value |
|------|----|-------|
| Wheelchair accessible | 0 | 1 |
| Accessible parking | 1 | 2 |
| Elevator available | 2 | 4 |
| Ramp available | 3 | 8 |
| Step-free access | 4 | 16 |
| Accessible restroom | 5 | 32 |
| Reserved seating | 6 | 64 |
| Service animals allowed | 7 | 128 |
| Sign language interpretation | 14 | 16384 |
| Captioning available | 15 | 32768 |
| Hearing loop | 16 | 65536 |
| Assistive listening devices | 17 | 131072 |
| Audio description | 24 | 16777216 |
| Braille materials | 25 | 33554432 |
| High contrast signage | 26 | 67108864 |
| Tactile guides | 27 | 134217728 |
| Easy read materials | 34 | 17179869184 |
| Quiet space | 35 | 34359738368 |
| Clear signage | 36 | 68719476736 |
| Trained staff | 37 | 137438953472 |
| Low light environment | 38 | 274877906944 |
| Accessible website | 44 | 17592186044416 |
| Screen reader support | 45 | 35184372088832 |
| Keyboard navigation | 46 | 70368744177664 |
| Voice command support | 47 | 140737488355328 |

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

### References

- ISO 3166-1 alpha-3: <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3>