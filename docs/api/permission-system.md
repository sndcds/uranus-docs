# Permissions Bitmask System

Uranus uses a **64-bit integer bitmask** to represent user permissions
across different scopes:

- Organizer
- Venue
- Space
- Event

This boolean flag model and enables:

- extremely fast permission checks with bitwise operations\
- link-specific permissions (e.g., organizer-link, venue-link)\
- flexible future expansion (bits 32--63 reserved)

Permissions are stored in:

    uranus.user_organizer_link.permissions
    uranus.user_venue_link.permissions
    uranus.user_space_link.permissions
    uranus.user_event_link.permissions

---

## Bitmask Layout (64-bit Integer)

| Bit Range  | Group     | Description                           |
|------------|-----------|---------------------------------------|
| 0 – 7      | Organizer | Permissions for managing organizers   |
| 8 – 15     | Venue     | Permissions for managing venues       |
| 16 – 23    | Space     | Permissions for managing venue spaces |
| 24 – 31    | Event     | Permissions for managing events       |
| 32 – 63    | Reserved  | Reserved for future features          |


# Permission Reference

## Organizer Permissions (Bits 0--7)

| Name                        | Bit  | Hex Mask    | Description                    |
|-----------------------------|------|-------------|--------------------------------|
| EditOrganizer               | 0    | 0x00000001  | Edit organizer settings        |
| DeleteOrganizer             | 1    | 0x00000002  | Delete an organizer            |
| ChooseAsEventOrganizer      | 2    | 0x00000004  | Select organizer for events    |
| ChooseAsEventPartner        | 3    | 0x00000008  | Add organizer as event partner |
| CanReceiveOrganizerMessages | 4    | 0x00000010  | Can recieve messages sent to the organizer |
| ManagePermissions           | 5    | 0x00000020. | Can set and remove permissions for linked users |

## Venue Permissions (Bits 8--15)

| Name         | Bit | Hex Mask    | Description                     |
|--------------|-----|-------------|---------------------------------|
| AddVenue     | 8   | 0x00000100  | Create new venues               |
| EditVenue    | 9   | 0x00000200  | Edit venue details              |
| DeleteVenue  | 10  | 0x00000400  | Remove existing venue           |
| ChooseVenue  | 11  | 0x00000800  | Assign venue when making events |

## Space Permissions (Bits 16--23)

| Name         | Bit | Hex Mask   | Description          |
|--------------|-----|------------|----------------------|
| AddSpace     | 16  | 0x00010000 | Add spaces to venues |
| EditSpace    | 17  | 0x00020000 | Modify venue spaces  |
| DeleteSpace  | 18  | 0x00040000 | Remove venue spaces  |

## Event Permissions (Bits 24--31)

| Name                | Bit | Hex Mask   | Description
|---------------------|-----|------------|---------------------------------|
| AddEvent            | 24  | 0x01000000 | Create events                   |
| EditEvent           | 25  | 0x02000000 | Modify events                   |
| DeleteEvent         | 26  | 0x04000000 | Delete events                   |
| ReleaseEvent        | 27  | 0x08000000 | Publish events                  |
| ViewEventInsights   | 28  | 0x10000000 | View event insights & analytics |

# PostgreSQL Utilities

### Check whether a permission is present

``` sql
CREATE OR REPLACE FUNCTION has_permission(mask BIGINT, perm BIGINT)
RETURNS BOOLEAN AS $$
    SELECT (mask & perm) = perm;
$$ LANGUAGE sql IMMUTABLE;
```

### Add a permission

``` sql
UPDATE uranus.user_venue_link
SET permissions = permissions | (1 << 11)
WHERE user_id = $1 AND venue_id = $2;
```

### Remove a permission

``` sql
UPDATE uranus.user_organizer_link
SET permissions = permissions & ~(1 << 1)
WHERE user_id = $1 AND organizer_id = $2;
```

---


  3322 2222 2222 1111 1111 11
  1098 7654 3210 9876 5432 1098 7654 3210

b 0000 0000 0000 0000 0000 0000 0000 0000

b 0001 1111 0000 0111 0000 1111 0000 1111 Admin              520556303
b 0001 1111 0000 0111 0000 1111 0000 1101 Manager            520556301
b 0001 1111 0000 0010 0000 0010 0000 1101 Assistent
b 0001 1111 0000 0010 0000 0010 0000 0000 Venue Manager
b 0001 1111 0000 0000 0000 0000 0000 0000 Booker             520093696
b 0001 0000 0000 0000 0000 0000 0000 0000 Insight Viewer
b 0001 0010 0000 0000 0000 0000 0000 0000 Event Proofreader
b 0000 0000 0000 0010 0000 0000 0000 0000 Space Manager

