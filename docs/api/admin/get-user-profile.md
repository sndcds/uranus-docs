# Get User Profile

<span class="func-signature">GET /api/admin/user/profile</span>

Returns information about the currently authenticated user.


!!! note "Authentication / Permissions"
    - The user must be authenticated.
    - Only the currently authenticated user’s information is returned.


```js title="JavaScript Fetch Example"
const response = await fetch('https://uranus.zxy/api/admin/user/profile', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});
```


```json title="JSON Response Example"
{
  "avatar_url": "https://uranus.zxy/api/user/36/avatar/64",
  "display_name": "Roald",
  "email_address": "roald@grain.one",
  "first_name": "",
  "last_name": "",
  "locale": "de",
  "theme": "light",
  "user_id": 36
}
```