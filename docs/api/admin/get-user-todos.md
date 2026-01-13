# Get User Todos

<span class="func-signature">GET /api/admin/user/todos</span>

Fetch all todos for the currently authenticated user.

- Returns todos in chronological order by `due_date` by default.
- Can be used to populate dashboards, reminders, or task lists in the frontend.


!!! note "Authentication / Permissions"
    - The user must be authenticated.
    - Only the currently authenticated user’s information is returned.


```js title="JavaScript Fetch Example"
const response = await fetch('https://uranus.zxy/api/admin/user/todos', {
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
  "todos": [
    {
      "id": 12,
      "title": "Contact artist booking",
      "description": "What kind of food is requested",
      "due_date": "2026-01-06T00:00:00Z",
      "completed": false
    },
    {
      "id": 13,
      "title": "Prepare invoices",
      "description": "Send invoices to sponsors",
      "due_date": "2026-01-07T00:00:00Z",
      "completed": true
    }
  ],
  "total_count": 2
}
```
