# Event Category Lookup

The Event Category Lookup API provides a list of event categories grouped by language.
It supports dynamic language filtering via ISO 639-1 language codes.

<span class="func-signature">GET /api/event/event-category-lookup/{optional query parameters}</ul>
 
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| lang      | string | No     | Comma-separated list of ISO 639-1 language codes (e.g. en,de,da) | 


## Examples

All languages:
```
GET /event-category-lookup
```

Specific languages:
```
GET /event-category-lookup?lang=de,en
```

## Response

Response