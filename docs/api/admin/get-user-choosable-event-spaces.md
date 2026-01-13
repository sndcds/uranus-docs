# Get User Chooseable Event Places

<span class="func-signature">GET /api/admin/user/choosable-places</span>

Returns all places (venue/space combinations) a user is allowed to choose from.

!!! note "Authentication / Permissions"
    - The user must be authenticated.


```json title="JSON Response Example"
{
  "places": [
    {
      "venue_id": 95,
      "venue_name": "Audimax",
      "space_id": null,
      "space_name": null,
      "city": "Flensburg",
      "country_code": "DEU"
    }
  ],
  "total_count": 1
}
```