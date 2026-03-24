# Get Event

Get a single event with all details for rendering in event portal applications.


### Example JSON result

```json
{
  "id": 41,
  "title": "Stricken",
  "description": "Nadeln",
  "languages": [
    "ga",
    "es"
  ],
  "tags": [
    "stricken",
    "häckeln"
  ],
  "org_id": 9,
  "org_name": "Aktivitetshuset",
  "org_web_url": "https://aktivitetshuset.de",
  "image": {
    "id": 320,
    "url": "http://localhost:9090/api/image/320"
  },
  "event_types": [
    {
      "type": 1,
      "genre": 1004
    },
    {
      "type": 1,
      "genre": 1027
    }
  ],
  "date": {
    "id": 111,
    "event_id": 41,
    "release_status": 3,
    "start_date": "2026-01-23",
    "start_time": "21:32",
    "accessibility_flags": "10",
    "location": "Aktivitetshuset",
    "street": "Norderstraße",
    "house_number": "49",
    "postal_code": "24939",
    "city": "Flensburg",
    "country": "DEU",
    "lon": 9.431293,
    "lat": 54.791607,
    "total_capacity": 12,
    "seating_capacity": 8,
    "building_level": 2,
    "venue_id": 69,
    "venue_web_url": "https://aktivitetshuset.de",
    "venue_logo_image_id": 331,
    "venue_logo_url": "http://localhost:9090/api/image/331",
    "space_id": 213,
    "space_name": "Foto",
    "space_web_url": "https://www.aktivitetshuset.de/showWorkshop.php?id=3"
  },
  "further_dates": [
    {
      "id": 112,
      "event_id": 41,
      "release_status": 3,
      "start_date": "2026-01-30",
      "start_time": "21:39",
      "accessibility_flags": "10",
      "location": "Aktivitetshuset",
      "street": "Norderstraße",
      "house_number": "49",
      "postal_code": "24939",
      "city": "Flensburg",
      "country": "DEU",
      "lon": 9.431293,
      "lat": 54.791607,
      "total_capacity": 12,
      "seating_capacity": 8,
      "building_level": 2,
      "venue_id": 69,
      "venue_web_url": "https://aktivitetshuset.de",
      "venue_logo_image_id": 331,
      "venue_logo_url": "http://localhost:9090/api/image/331",
      "space_id": 213,
      "space_name": "Foto",
      "space_web_url": "https://www.aktivitetshuset.de/showWorkshop.php?id=3"
    },
    {
      "id": 113,
      "event_id": 41,
      "release_status": 3,
      "start_date": "2026-01-30",
      "start_time": "21:39",
      "accessibility_flags": "9",
      "location": "Aktivitetshuset",
      "street": "Norderstraße",
      "house_number": "49",
      "postal_code": "24939",
      "city": "Flensburg",
      "country": "DEU",
      "lon": 9.431293,
      "lat": 54.791607,
      "total_capacity": 12,
      "seating_capacity": 12,
      "building_level": 0,
      "venue_id": 69,
      "venue_web_url": "https://aktivitetshuset.de",
      "venue_logo_image_id": 331,
      "venue_logo_url": "http://localhost:9090/api/image/331",
      "space_id": 214,
      "space_name": "Keramik",
      "space_web_url": "https://www.aktivitetshuset.de/showWorkshop.php?id=4"
    }
  ]
}
```