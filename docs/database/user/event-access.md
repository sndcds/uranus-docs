# Accessing Events

## Edit Permission Rules

A user can edit a specific event if at least one of the following is true:

1.	**Organizer-based rule:**
    - The event’s organizer_id matches an organizer the user is linked to via user_organizer_links, AND
    - The corresponding user_role has edit_event = TRUE.
2.	**Event-based rule:**
    - The user is directly linked to the event via user_event_links, AND
    - The associated user_role has edit_event = TRUE.


## Example Query

```sql
SELECT EXISTS (
    -- Case 1: User has rights via organizer
    SELECT 1
    FROM {{schema}}.event e
    JOIN {{schema}}.user_organizer_links uol ON e.organizer_id = uol.organizer_id
    JOIN {{schema}}.user_role ur ON uol.user_role_id = ur.id
    WHERE e.id = $1 AND uol.user_id = $2 AND ur.edit_event = TRUE

    UNION

    -- Case 2: User has rights via direct event link
    SELECT 1
    FROM {{schema}}.user_event_links uel
    JOIN {{schema}}.user_role ur2 ON uel.user_role_id = ur2.id
    WHERE uel.event_id = $1 AND uel.user_id = $2 AND ur2.edit_event = TRUE
) AS can_edit;
```