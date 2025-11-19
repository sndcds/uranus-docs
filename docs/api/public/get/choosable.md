# Choosable API Endpoints

The **Choosable** endpoints provide lists of items that can be selected or referenced by other parts of the URANUS system.  
Each endpoint returns structured data representing a set of *choices* — for example, event categories, venues, or ticket types.

These endpoints are **public**, meaning they can be accessed **without authentication** and are optimized for frontend components such as dropdown menus or autocomplete inputs.

---

## Concept

All *choosable* endpoints share a consistent structure.

| Field  | Type                  | Description |
|:-------|:----------------------|:-------------|
| `id`   | `integer` or `string` | Unique identifier for the item |
| `name` | `string`              | Human-readable label for the item |

Additional fields may be present depending on the endpoint, but `id` and `name` are **always included**.

---

## Access

Public *choosable* endpoints are accessible by **anyone** and require **no authentication**.

!!! info "Base URL"
    ```
    https://{{service-domain}}/api/
    ```

These endpoints expose **non-sensitive** information only — intended for general or public consumption.

---

## Examples

`GET /api/choosable-languages`

```json
[
  {
    "id": "sq",
    "name": "Albanian"
  },
  {
    "id": "hy",
    "name": "Armenian"
  },
  {
    "id": "be",
    "name": "Belarusian"
  },
  (...)
]
```

---

## Usage Notes

!!! note
    - All **Choosable** endpoints are **read-only**.  
    - Endpoints typically return lightweight lists intended for client UI elements.  

---

## Typical Use Cases

- Populating dropdowns, select boxes, or filter components.  
- Fetching human-readable names for stored foreign key IDs.  
- Providing prefilled choices for forms or configuration screens.  
- Displaying lists of available options to unauthenticated users.

---

## Related Documentation

- [API Overview](../../index.md)

