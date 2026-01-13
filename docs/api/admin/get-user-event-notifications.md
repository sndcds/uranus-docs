# Get User Event Notifications

<span class="func-signature">GET /api/admin/user/event/notifications</span>

Returns all event related notifications for the user.

!!! note "Authentication / Permissions"
    - The user must be authenticated.


```json title="JSON Response Example"
{
  "notifications": [
    {
      "event_id": 27,
      "event_title": "SVIN",
      "organization_id": 5,
      "organization_name": "[SoundCodes~",
      "release_status_id": 2,
      "earliest_event_date": "2026-01-20T00:00:00Z",
      "latest_event_date": "2026-01-20T00:00:00Z",
      "days_until_event": 7
    }
  ],
  "total_count": 1
}
```