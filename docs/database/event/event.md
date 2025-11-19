# event Table

The `event` table stores core information about events within the platform. It captures essential details such as organizational context, scheduling constraints, descriptive content, and metadata required for displaying and managing events effectively.

## Purpose

This table is used to manage event-level data including age restrictions, textual descriptions, links, styling options, and relationships to organizers and spaces. It supports event creation, editing, and retrieval workflows, enabling both administrative control and front-end presentation of event content.

## Field Descriptions

- `id` (INTEGER) – Unique identifier for the event. Primary key for internal referencing.
- `created_at` (TIMESTAMP) – Timestamp when the event record was created.
- `modified_at` (TIMESTAMP) – Timestamp of the last update to the event record.
- `organizer_id` (INTEGER) – References the organizer responsible for the event.
- `space_id` (INTEGER) – References the space where the event takes place.
- `title` (VARCHAR) – Main title or name of the event.
- `subtitle` (TEXT) – Subtitle or secondary title for the event.
- `description` (TEXT) – Detailed textual description of the event.
- `teaser_text` (TEXT) – Short teaser or promotional text for the event.
- `source_url` (TEXT) – Source URL where the event data originates or is referenced.
- `min_age` (INTEGER, nullable) – Minimum age required to attend the event. A NULL value indicates no minimum age restriction.
- `max_age` (INTEGER, nullable) – Maximum age allowed to attend the event. A NULL value indicates no maximum age restriction.
- `languages` (TEXT) – Languages used or supported during the event.
- `participation_info` (TEXT) – Additional details about participation requirements or restrictions.
- `meeting_point` (TEXT) – Information about the meeting location for the event.
- `release_date` (DATE) – Date when the event information becomes publicly available.
- `custom` (TEXT) – Custom metadata or JSON data for extended event information.
- `style` (TEXT) – Styling or categorization information for event presentation.
