# Admin Endpoints

Secured admin endpoints require the client to be **authenticated** via a login process.  
Only authorized users can access these endpoints, which provide data management, configuration, and editing capabilities.

### Example base URL:

- `https://uranus.zyx/api/admin/...`


### Requirements:

- **Login**: The user must be authenticated before sending requests.
- **Authorization**: The user’s role determines which admin operations are allowed.
- **HTTPS**: All admin endpoints should be accessed over secure HTTPS connections.


!!! note
    - Admin endpoints can create, update, and delete records.
    - Check the API reference for available parameters for each endpoint.



## API Fetch Examples

#### GET

```js
url = 'https://uranus.zxy/api/admin/permissions/list?lang=da'
const response = await fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});

const data = await response.json();
// Your code ...
```

#### PUT

```js
  // Example is coming soon ...
```


#### POST

```js
  // Example is coming soon ...
```


#### DELETE

```js
  // Example is coming soon ...
```


## List of API endpoints

| Method | URL | Affects Data for Current User |
|--------|-----|------------------------------|
| GET    | `/permissions/list` |  |
| POST   | `/refresh` |  |
| GET    | `/user/profile` | ✓ |
| PUT    | `/user/profile` | ✓ |
| PUT    | `/user/settings` | ✓ |
| POST   | `/user/avatar` | ✓ |
| DELETE | `/user/avatar` | ✓ |
| GET    | `/user/messages` | ✓ |
| POST   | `/user/send-message` | ✓ |
| GET    | `/user/todos` | ✓ |
| GET    | `/user/todo/:todoId` | ✓ |
| PUT    | `/user/todo` | ✓ |
| DELETE | `/user/todo/:todoId` | ✓ |
| GET    | `/organization/:organizationId/member/:memberId/permissions` |  |
| PUT    | `/organization/:organizationId/member/:memberId/permissions` |  |
| GET    | `/user/event/notifications` | ✓ |
| GET    | `/user/choosable-organizations` | ✓ |
| GET    | `/user/choosable-event-places` | ✓ |
| GET    | `/organization/:organizationId` |  |
| PUT    | `/organization` |  |
| PUT    | `/organization/:organizationId` |  |
| DELETE | `/organization/:organizationId` |  |
| GET    | `/organization/dashboard` |  |
| GET    | `/organization/:organizationId/venues` |  |
| GET    | `/organization/:organizationId/events` |  |
| GET    | `/organization/:organizationId/team` |  |
| POST   | `/organization/:organizationId/team/invite` |  |
| DELETE | `/organization/:organizationId/team/member/:memberId` |  |
| POST   | `/organization/team/invite/accept` |  |
| GET    | `/venue/:venueId` |  |
| PUT    | `/venue` |  |
| PUT    | `/venue/:venueId` |  |
| DELETE | `/venue/:venueId` |  |
| GET    | `/space/:spaceId` |  |
| PUT    | `/space` |  |
| PUT    | `/space/:spaceId` |  |
| DELETE | `/space/:spaceId` |  |
| GET    | `/event/:eventId` |  |
| DELETE | `/event/:eventId` |  |
| POST   | `/event/:eventId/date` |  |
| PUT    | `/event/:eventId/date/:dateId` |  |
| DELETE | `/event/:eventId/date/:dateId` |  |
| POST   | `/event/create` |  |
| PUT    | `/event/:eventId/release-status` |  |
| PUT    | `/event/:eventId/header` |  |
| PUT    | `/event/:eventId/description` |  |
| PUT    | `/event/:eventId/summary` |  |
| PUT    | `/event/:eventId/types` |  |
| PUT    | `/event/:eventId/place` |  |
| PUT    | `/event/:eventId/link` |  |
| PUT    | `/event/:eventId/link/:linkId` |  |
| PUT    | `/event/:eventId/tags` |  |
| PUT    | `/event/:eventId/languages` |  |
| PUT    | `/event/:eventId/participation-infos` |  |
| GET    | `/event/:eventId/image/:imageIndex/meta` |  |
| POST   | `/event/:eventId/image/:imageIndex` |  |
| DELETE | `/event/:eventId/image` |  |
| POST   | `/event/:eventId/teaser/image` |  |

