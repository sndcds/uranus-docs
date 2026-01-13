# Get Organization

<span class="func-signature">GET /api/admin/organization/:organizationId</span>

Returns organization data, if user has permission to get the information.


!!! note "Authentication / Permissions"
    - The user must be authenticated.
    - Only users linked to the organization can access its details.


```json title="JSON Response Example"
{
  "address_addition": null,
  "city": "Flensburg",
  "contact_email": "soundcodes@grain.one",
  "contact_phone": "0176 59 97 80 74",
  "country_code": "DEU",
  "description": "Klanglabor, Studio, Workshops",
  "holding_organization_id": null,
  "house_number": "2",
  "lat": 54.79611673847839,
  "legal_form_id": 3,
  "lon": 9.430513840284561,
  "name": "[SoundCodes~",
  "nonprofit": false,
  "postal_code": "24939",
  "state_code": "SH",
  "street": "Am Nordertor",
  "website_url": "https://soundcodes.grain.one"
}
```