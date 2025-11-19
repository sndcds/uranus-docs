# Public Endpoints

Public endpoints can be fetched by **anyone** and do not require login credentials.  
They return data intended for public consumption only, such as event listings, venue details, or other non-sensitive information.

**Example base URL:**

- `https://{{service-domain}}/api/`

**Examples:**

- `GET /api/events` – returns a list of public events.
- `GET /api/venues` – returns a list of public venues.

!!! note
    - Public endpoints are read-only.
    - Check the API reference for available parameters for each endpoint.