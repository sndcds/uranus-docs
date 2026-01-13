# Get Permissions List

<span class="func-signature">GET /api/admin/permissions/list</span>

Fetch all Permission flags with the bit number, a label and a description.


!!! note "Authentication / Permissions"
    - The user must be authenticated.


#### Parameters:

- `lang` - ISO 639-1 language code, defaults to 'en'



```js title="JavaScript Fetch Example"
const response = await fetch('https://uranus.zxy/api/admin/permissions/list?lang=da', {
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
  "event": [
    {
      "bit": 24,
      "label": "Add Event",
      "description": "Create events"
    },
    {
      "bit": 25,
      "label": "Edit Event",
      "description": "Modify events"
    },
    {
      "bit": 26,
      "label": "Delete Event",
      "description": "Delete events"
    },
    {
      "bit": 27,
      "label": "Release Event",
      "description": "Publish events"
    },
    {
      "bit": 28,
      "label": "View Insights",
      "description": "View event insights & analytics"
    }
  ],
  "space": [
    {
      "bit": 16,
      "label": "Add Space",
      "description": "Add spaces to venues"
    },
    {
      "bit": 17,
      "label": "Edit Space",
      "description": "Modify venue spaces"
    },
    {
      "bit": 18,
      "label": "Delete Space",
      "description": "Remove venue spaces"
    }
  ],
  "venue": [
    {
      "bit": 8,
      "label": "Add Venue",
      "description": "Create new venues"
    },
    {
      "bit": 9,
      "label": "Edit Venue",
      "description": "Edit venue details"
    },
    {
      "bit": 10,
      "label": "Delete Venue",
      "description": "Remove existing venue"
    },
    {
      "bit": 11,
      "label": "Choose Venue",
      "description": "Assign venue when making events"
    }
  ],
  "organization": [
    {
      "bit": 0,
      "label": "Edit organization",
      "description": "Edit organization settings"
    },
    {
      "bit": 1,
      "label": "Delete organization",
      "description": "Delete an organization"
    },
    {
      "bit": 2,
      "label": "Choose as event organization",
      "description": "Select organization for events"
    },
    {
      "bit": 3,
      "label": "Choose as event partner",
      "description": "Add organization as event partner"
    },
    {
      "bit": 4,
      "label": "Can Receive Messages",
      "description": "Can receive messages sent to the organization"
    },
    {
      "bit": 5,
      "label": "Manage permissions",
      "description": "Can set and remove permissions for linked users"
    },
    {
      "bit": 6,
      "label": "Manage team",
      "description": "Manage team members"
    }
  ]
}
```
