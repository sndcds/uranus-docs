# Admin Endpoints

Secured admin endpoints require the client to be **authenticated** via a login process.  
Only authorized users can access these endpoints, which provide data management, configuration, and editing capabilities.

**Example base URL:**

- `https://uranus.de/api/admin/…`


**Requirements:**

- **Login**: The user must be authenticated before sending requests.
- **Authorization**: The user’s role determines which admin operations are allowed.
- **HTTPS**: All admin endpoints should be accessed over secure HTTPS connections.

**Examples:**

- `POST /api/admin/eventscreate`
- `PUT /api/admin/event/update`
- `DELETE /api/admin/event/delete`


!!! note
    - Admin endpoints can create, update, and delete records.
    - Check the API reference for available parameters for each endpoint.
