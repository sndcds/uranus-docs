# Get User Messages

<span class="func-signature">GET /api/admin/user/messages</span>

Fetch all messages for the currently authenticated user.

- Returns messages in chronological order by default.
- Can be used to populate dashboards, reminders, or task lists in the frontend.


!!! note "Authentication / Permissions"
    - The user must be authenticated.
    - Only the currently authenticated user’s information is returned.


```js title="JavaScript Fetch Example"
const response = await fetch('https://uranus.zxy/api/admin/user/messages', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});

const data = await response.json();
```


```json title="JSON Response Example"
{
  "messages": null
}
```
