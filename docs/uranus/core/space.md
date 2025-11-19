# Space

**A space defines a specific area or room within a venue, providing a more granular level of detail about where events are held. Each space is linked to a particular venue via the `venue_id` field, establishing a clear hierarchy between venue and sub-location.**


Spaces are characterized by their name and functional attributes such as total capacity and seating capacity, allowing precise accommodation planning. The `space_type_id` references the type or category of the space (e.g., auditorium, conference room, outdoor area), enabling standardized classification.

Additional details include the building level, which helps identify the physical location within multi-story venues, and an optional URL for further information or booking systems related to the space.

Accessibility is an important aspect of the space data model: the `accessibility_summary` provides a textual overview of accessibility features, while `accessibility_flags` encode specific accessibility attributes in a structured format, supporting users with special needs.

Creation and modification timestamps track the history of data entries, ensuring accurate management and accountability.

In essence, spaces enrich the event database by offering detailed spatial context, improving event organization and visitor information at a sub-venue level.