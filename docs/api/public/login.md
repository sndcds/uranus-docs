# Login

<span class="func-signature">POST /api/login</span>

Authenticates a user and returns an access token and refresh token for subsequent API requests.

- Access tokens typically expire after a certain time; use the refresh token to obtain a new access token.
- The request requires a valid email and password.
- Returns 401 Unauthorized if credentials are invalid.


```js title="JavaScript Example"
const response = await fetch('https://example.com/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'secret'
  }),
});
```  


```json title="JSON Example"
{
  "message": "login successful",
  "user_id": 36,
  "display_name": "Roald",
  "first_name": "",
  "last_name": "",
  "locale": "de",
  "theme": "light",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNiwiZXhwIjoxNzY4MTYyNTUxfQ.vBTnw3zPLhZYw6YJ9c8zWpdBXuVjeY5gliKwg5cwyxg",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNiwiZXhwIjoxNzY4NzY2OTkxfQ.2rO0VZq6GL4g8dfg0zCY6KPKS-3M6om6CErg56eOp-Q"
}
```
