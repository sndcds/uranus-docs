# user_role Table

The user_role table defines distinct roles within the Uranus system, each representing a specific set of permissions that govern what actions users assigned to that role can perform. This role-based access control ([RBAC ↗](https://en.wikipedia.org/wiki/Role-based_access_control)) mechanism ensures secure and organized management of the event data and related entities by restricting operations according to assigned privileges.


## Purpose

This table enables granular control over user capabilities, allowing administrators to tailor access rights based on responsibilities such as organizing events, managing venues, or overseeing content publication. By assigning roles to users, the system enforces security policies and facilitates collaborative workflows.


Field Descriptions

- `id` (UUID or INTEGER) – Unique identifier for the role. Serves as the primary key.
- `name` (TEXT) – The descriptive name of the role (e.g., “Organizer”, “Editor”, “Admin”).

Permission Flags (Boolean)

These fields indicate whether users with this role have permission to perform specific actions:

- `edit_organizer` – Permission to modify organizer details.
- `delete_organizer` – Permission to remove organizer entries.
- `add_venue` – Permission to create new venues.
- `edit_venue` – Permission to update existing venue information.
- `delete_venue` – Permission to delete venues.
- `add_space` – Permission to add spaces within venues.
- `edit_space` – Permission to edit space details.
- `delete_space` – Permission to delete spaces.
- `add_event` – Permission to create new events.
- `edit_event` – Permission to modify event information.
- `delete_event` – Permission to delete events.
- `release_event` – Permission to publish or make events publicly visible.
- `view_event_insights` – Permission to access analytics or detailed information related to events.


This role-based permission model supports flexible delegation of responsibilities and maintains data integrity and security across the Uranus platform.