# Meta Information Retrieval

In the platform, meta information serves as essential reference data that categorizes and contextualizes core entities such as events, venues, and spaces. This metadata includes classifications like event types, genres, supported languages, countries, venue types, and space types — all of which help to standardize and enrich the data model.

Retrieving this meta information allows client applications and services to populate selection lists, filters, and descriptive fields with consistent, up-to-date options. By centralizing these lookup values, the system ensures uniform terminology and improves data integrity across various components.

This meta data is typically fetched through dedicated API endpoints which return structured JSON arrays representing each category. These endpoints support language localization where applicable, enabling the platform to serve content that is relevant and accessible to diverse user bases.

In summary, meta information underpins the platform’s ability to organize and present event-related data meaningfully, making it a foundational aspect of the overall architecture and user experience.


---

# Endpoints

<span class="func-signature">/api/meta/...</ul>

Meta info is requested by endpoint beginning with meta, followed by the specific meta category and neccessary and optional parameters.


## Get Event Types

<span class="func-signature">/api/meta/event-types?language=..</ul>

Example:
```
https://uranus.de/api/meta/event-types?language=de
```  

Result:
```json
{
  "source": "Uranus 1.0.0",
  "language": "en",
  "event-types": [
    {
      "type_id": 26,
      "type_name": "Ausflug"
    },
    {
      "type_id": 12,
      "type_name": "Ausstellung"
    }
}
```


## Get Event Genres

<span class="func-signature">/api/meta/genres?language=..</ul>

Example:
```
https://uranus.de/api/meta/genres?language=de
```  

Result:
```json
{
  "api": "Uranus",
  "version": "1.0.0",
  "language": "en",
  "event_genres": [
    {
      "genre_id": null,
      "genre_name": null,
      "type_id": 19,
      "type_name": "assembly"
    },
    {
      "genre_id": null,
      "genre_name": null,
      "type_id": 35,
      "type_name": "assistance offer"
    }
  ]
}
```

## Get Event Genres by Event Type

<span class="func-signature">/api/meta/genres?event-type&language=..</ul>

Example:
```js
https://uranus.de/api/meta/genres?event-type=1&language=de
```  

Result:
```json
{
  "api": "Uranus",
  "version": "1.0.0",
  "language": "en",
  "event_type": 1,
  "event_genres": [
    {
      "genre_id": 26,
      "genre_name": "Alternative"
    },
    {
      "genre_id": 23,
      "genre_name": "blues"
    }
  ]
}
```
