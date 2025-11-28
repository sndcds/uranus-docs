# user Table

The user table stores information about individuals who interact with the system — such as event organizers, editors, administrators, or contributors. It is a foundational table for authentication, authorization, and accountability in the platform.


## Purpose

This table is used to manage user accounts, track ownership of created or modified data, assign roles, and control access to specific resources (e.g., organizations, venues, or events). It supports both internal administrative workflows and externally-facing content contribution.


## Field Descriptions

- `id` (UUID) – Unique identifier for the user. Primary key for internal referencing.
- `email_address` (TEXT) – Used for login, communication, and as a unique identifier for account recovery.
- `password_hash` (TEXT) – Stores a securely hashed version of the user’s password. This is never exposed and used only for internal authentication.
- `activate_token` (TEXT, nullable) – Token used to activate the user account or reset the password. Generated when account creation or password recovery is requested.
- `is_active` (BOOLEAN) – If true, the account activated and can log in or perform any actions. Useful for moderation or access control.
- `display_name` (TEXT, nullable) – The public-facing name (e.g., for attribution on event pages). This may differ from the full name for privacy or branding reasons.
- `user_name` (TEXT, unique, nullable) – Optional handle or short name used for UI display, tagging, or attribution.
- `first_name` (TEXT, nullable) – User’s first name, if provided.
- `last_name` (TEXT, nullable) – User’s last name, if provided.
- `locale` (VARCHAR(2), nullable) – Preferred language code (e.g. en, de) based on ISO 639-1, used to personalize UI language and content.
- `theme` (VARCHAR, nullable) – Theme used in the UI, can be 'light' or 'dark'.
- `created_at` (TIMESTAMP) – Timestamp of when the user account was created.
- `modified_at` (TIMESTAMP, nullable) – Timestamp of the last update to the user’s profile or status.
