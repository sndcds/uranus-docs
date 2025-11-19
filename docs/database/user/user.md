# user Table

The user table stores information about individuals who interact with the system — such as event organizers, editors, administrators, or contributors. It is a foundational table for authentication, authorization, and accountability in the platform.


## Purpose

This table is used to manage user accounts, track ownership of created or modified data, assign roles, and control access to specific resources (e.g., organizations, venues, or events). It supports both internal administrative workflows and externally-facing content contribution.

Field Descriptions



- `id` (UUID or INTEGER) – Unique identifier for the user. Primary key for internal referencing.
- `full_name` (TEXT) – The legal or full name of the user, used for internal administration or communication.
- `display_name` (TEXT) – The public-facing name (e.g., for attribution on event pages). This may differ from the full name for privacy or branding reasons.
- `email_address` (TEXT) – Used for login, communication, and as a unique identifier for account recovery.
- `password_hash` (TEXT) – Stores a securely hashed version of the user’s password. This is never exposed and used only for internal authentication.
- `disabled` (BOOLEAN) – If true, the account is deactivated and cannot log in or perform any actions. Useful for moderation or access control.
- `created_at` (TIMESTAMP) – Timestamp of when the user account was created.
- `modified_at` (TIMESTAMP) – Timestamp of the last update to the user’s profile or status.