# Example Queries

## User Permissions for Venues

This query shows how to retrieve all venues for which a user has at least one of the following permissions: add_event, edit_event, delete_event, or release_event.

Input: A valid user id:

```sql
SELECT
    v.id AS venue_id,
    o.name AS org_name,
    v.name AS venue_name,
    ur.name AS role_name,
    ur.edit_organizer AS edit_org,
    ur.add_event,
    ur.edit_event,
    ur.delete_event,
    ur.release_event
FROM uranus.user_organizer_links uol
JOIN uranus.organizer o ON o.id = uol.organizer_id
JOIN uranus.user_role ur ON ur.id = uol.user_role_id
JOIN uranus.venue v ON v.organizer_id = o.id
WHERE uol.user_id = 12
    AND (ur.add_event OR ur.edit_event OR ur.delete_event OR ur.release_event)
ORDER BY org_name, venue_name;
```