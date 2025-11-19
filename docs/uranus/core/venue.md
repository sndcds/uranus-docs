# Venue

**A venue represents a physical location where events take place and is directly associated with an organizer within the Uranus system. It serves as the key reference point for event locations, providing detailed geographical, contact, and operational information.**


Each venue is identified by a unique `id` and linked to an organizer through the `organizer_id` field, establishing a clear relationship between the event management entity and its locations.

Key attributes of a venue include its name, full address (`street`, `house_number`, `postal_code`, `city`, `country`), and geographical coordinates stored as spatial data (`wkb_geometry`). This spatial information enables mapping and location-based search functionalities, enhancing event discoverability.

Additional metadata such as opening and closing dates (`opened_at`, `closed_at`), descriptive texts, and contact details (`email` and `phone`) provide valuable context for users and visitors, supporting both logistical planning and communication.

Creation and modification timestamps, along with user identifiers (`created_by`, `modified_by`), ensure accountability and traceability of venue data changes.


In summary, venues form the foundational infrastructure for organizing and presenting events, linking digital event data to real-world locations in a structured and maintainable manner.