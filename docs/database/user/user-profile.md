# user_profile Table

The `user_profile` table serves as an optional extension of the core user table. While the user table handles authentication and basic identity, user_profile stores additional personal details and user preferences, such as display names and UI language settings. It allows for a clean separation between system-level user management and customizable, user-facing information.

This design supports modularity – not all users require a profile, and the table can evolve independently from authentication logic.


## Purpose

- Store additional personal information (e.g., first and last names)
- Manage per-user settings such as preferred interface language
- Allow optional user customization without overloading the main user table

Field Descriptions

- `user_id` (UUID or INTEGER) – Foreign key referencing the user table. Ensures a one-to-one (or optionally sparse) relationship between user and user_profile.
- `user_name` (TEXT) – Optional handle or short name used for UI display, tagging, or attribution.
- `first_name` (TEXT) – User’s first name, if provided.
- `last_name` (TEXT) – User’s last name, if provided.
- `iso_639_1` (TEXT, 2-character) – Preferred language code (e.g. en, de) based on ISO 639-1, used to personalize UI language and content.
- `created_at` (TIMESTAMP) – Timestamp of when the profile was created.
- `modified_at` (TIMESTAMP) – Timestamp of the last update to the profile or user settings.

This table enhances the platform’s flexibility by enabling personalized and internationalized user experiences while keeping core user authentication clean and secure.