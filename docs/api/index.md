# API

Uranus implements a [RESTful API ↗](restful) (Representational State Transfer) which is an architectural style for designing networked applications, particularly web services. It defines a set of constraints that, when followed, make an API scalable, simple, and efficient.

The API provides two main categories of endpoints:

1. **Public Endpoints** – accessible without authentication, returning **public data** only.
2. **Secured Admin Endpoints** – require user authentication and authorization before access.


## Flexible Parameter-Based API Access

Uranus follows a RESTful API design that emphasizes clarity, consistency, and flexibility. A key feature of this design is its **parameter-based query system**, which allows clients to access and filter data with precision.

The API endpoints accept a variety of query parameters, enabling users to define exactly what kind of data they need. These parameters can be combined in many different ways — for example, to request events filtered by date, location, type, target audience, or organizer. This flexible system supports a wide range of use cases, from simple lookups to complex queries for portals or applications.

Because all parameters are optional and can be freely combined, the API remains both powerful and intuitive. Clients can start with minimal requests and incrementally build up more specific queries as needed, without the need for different endpoints or custom logic.

This approach makes the Uranus API well-suited for dynamic frontends, public search interfaces, and integrations where versatile access to structured event data is essential.

**Example:**

```
https://uranus.de/api/events?start=2024&lon=9.431&lat=54.791&radius=80m
```

This request retrieves a list of **events** based on the following filters:

- `start=2024-01-01` – Filters for events that begin **on or after January 1, 2024**.
- `lon=9.431297` and `lat=54.791603` – Sets the **geographic center** of the search.
- `radius=80m` – Limits results to events happening **within an 80 m radius** of the given coordinates.



## API Responses

By default, Uranus returns results in [JSON ↗](https://en.wikipedia.org/wiki/JSON) format, which can be easily processed by client applications.

Each response includes the API name and version, and optionally a language code if the results are language-specific.

**Example response:**

```json
{
  "api": "Uranus",
  "version": "1.0.0",
  "language": "en",
  "some_data": {
    "id": 123,
    "name": "Example"
  }
}
```

!!! note
    All property names in Uranus JSON must be in snake_case syntax, e.g. `snake_case_named_property_example`


## Customizing API Responses with the `result` Parameter

The Uranus API provides a flexible mechanism to control the data returned by any query through the optional `result` parameter. This parameter allows clients to specify exactly which fields or pieces of information they want to receive in the response.

By including the `result` parameter in your API request, you can request a tailored subset of data fields instead of receiving the full dataset. The parameter accepts a comma-separated list of field names relevant to the query mode.
