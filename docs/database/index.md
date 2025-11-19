# Database

## Technology

Uranus uses a PostgreSQL Database with the PostGIS extension.

**PostgreSQL** is used because it is a powerful, reliable, and open-source relational database system that supports complex data models, extensibility, and strong data integrity. Its advanced features—such as JSON support, full-text search, and geospatial extensions like PostGIS—make it ideal for managing structured event and cultural data at scale.

- [postgresql.org ↗](https://www.postgresql.org/)
- [wiki/PostgreSQL ↗](https://en.wikipedia.org/wiki/PostgreSQL)


**PostGIS** is especially useful in the event and culture context because it enables spatial queries—such as finding events near a location, within a city district, or accessible by public transport—making geographic filtering, clustering, and visualization of cultural data both powerful and efficient.

- [postgis.net ↗](https://postgis.net/)
- [wiki/PostGIS ↗](https://en.wikipedia.org/wiki/PostGIS)


In addition, Uranus integrates with **Pluto**, a separate service responsible for managing image files within the system. Pluto utilizes dedicated tables within the same database to store and organize image metadata and file references. This modular approach allows for efficient handling of multimedia assets while keeping the core event data and media management logically separated.

---

## Database Structure

The database schema is designed to model the cultural and event landscape in a structured, relational way. It includes core entities such as users, organizers, venues, spaces, events, and event-dates, each representing a specific aspect of the ecosystem.

- **Users** represent individuals who interact with the system, such as managers, bookers and editors.
- **Organizers** reflect the institutional structure behind events, often hierarchically (e.g., association → working group).
- **Venues** are physical locations, while **spaces** refer to specific rooms or areas within those venues.
- **Events** capture the main activity or program, and **event-dates** allow flexible, multi-date scheduling.
- **Linked tables** support many-to-many relationships (e.g., users with specific roles linked to organizers, venues, spaces and events).
- **User roles** define permissions and access levels, ensuring secure and collaborative data management.

This modular structure enables flexible querying, reusability of entities, and a clear separation of responsibilities between data elements.


---

## Editorial Curation

In general, most fields in Uranus records can be entered freely by users. However, certain data points are based on predefined selections configured by the operator of the Uranus instance. These include values such as event types, genres, room types, legal forms, and several other classification attributes.

The rationale behind this controlled vocabulary is to ensure consistency across records, enable precise and effective search results, and support multilingual representations of key terms where needed. This curated structure plays a crucial role in maintaining data quality and enhancing the usability of the system for both users and integrators.
