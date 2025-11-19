# event_date Table

The event_date table stores detailed scheduling information for individual occurrences of events. It serves as a critical component for managing event timing, duration, and availability within the platform, enabling accurate representation of single or recurring sessions.

## Purpose

This table is used to track specific dates and times associated with events, link these occurrences to spaces or venues, and handle related metadata such as accessibility, visitor information, and ticket availability. It supports scheduling workflows, calendar integration, and user-facing status updates on event availability.

## Field Descriptions

- `id` (UUID or INTEGER) – Unique identifier for the event date. Primary key for internal referencing.
- `created_at` (TIMESTAMP) – Timestamp when this event date record was created.
- `modified_at` (TIMESTAMP) – Timestamp of the last update to this event date record.
- `event_id` (INTEGER) – References the associated event.
- `space_id` (INTEGER) – References the space where the event date takes place.
- `start` (TIMESTAMP) – Start date and time of the event occurrence.
- `end` (TIMESTAMP) – Optional end date and time of the event occurrence.
- `entry_time` (TIME) – Optional entry or access time related to the event date.
- `accessibility_flags` (BIGINT) – Flags indicating accessibility options or requirements.
- `visitor_info_flags` (BIGINT) – Flags storing visitor-related information or settings.
- `ticket_link` (TEXT) – URL to purchase tickets or register for this event date.
- `duration` (INTEGER) – Duration of the event occurrence in minutes (optional, can be calculated).
- `custom` (TEXT) – Field for custom or extended metadata in JSON or similar format.
- `status` (TEXT) – Status of the event date (e.g., active, canceled, postponed).
- `availability_status` (TEXT) – Code representing ticket availability or reservation status (e.g., "available", "limited", "full").