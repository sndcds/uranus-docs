# login

<span class="func-signature">/admin/login</ul>

Authenticates a user and initiates a session.  

Example:
```js
const loginRes = await fetch('https://example.com/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'secret'
  }),
  credentials: 'include' // optional, if you need to send cookies
});
```  

Used to log a user into the system. Returns a token or session identifier upon successful authentication.
