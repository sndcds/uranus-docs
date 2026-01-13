# Get User Choosable Organizations

<span class="func-signature">GET /api/admin/choosable-organizations</span>

Returns a list of organizations a user can choose from.


!!! note "Authentication / Permissions"
    - The user must be authenticated.


```json title="JSON Response Example"
{
  "organizations": [
    {
      "id": 5,
      "name": "[SoundCodes~"
    },
    {
      "id": 112,
      "name": "Toplap Flensburg"
    }
  ],
  "total_count": 2
}
```