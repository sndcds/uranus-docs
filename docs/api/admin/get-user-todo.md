# Get User Todo

<span class="func-signature">GET /api/admin/user/todo</span>

Fetch a specific todo for the currently authenticated user.

!!! note "Authentication / Permissions"
    - The user must be authenticated.
    - Only the currently authenticated user’s information is returned.


```js title="JavaScript Fetch Example"
const response = await fetch('https://uranus.zxy/api/admin/user/todo/12', {
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
  "todo": {
    "id": 12,
    "title": "Contact artist booking",
    "description": "What kind of food is requested",
    "due_date": "2026-01-06T00:00:00Z",
    "completed": false
  }
}
```
