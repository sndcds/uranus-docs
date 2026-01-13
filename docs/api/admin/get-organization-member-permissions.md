# Get Organization Member Permissions

<span class="func-signature">GET /api/admin/organization/:organizationId/member/:memberId/permissions</span>

Returns organization-level permissions for a member of an organization team.


!!! note "Authentication / Permissions"
    - The user must be authenticated.


```json title="JSON Response Example"
{
  "permissions": 520556415,
  "user_display_name": "Roald",
  "user_id": 36
}
```