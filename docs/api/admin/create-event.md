# Event Creation Workflow

Events are created in multiple steps. The process begins with submitting the basic event information, such as title, description, and dates. Additional details — such as images, external URLs, accessibility settings, and other metadata — can be provided in subsequent requests.

This incremental approach enables a user interface to guide users through the event creation process in simple, manageable steps, rather than overwhelming them with a large form all at once. Each step can be sent to the API individually, allowing validation and error handling at each stage without losing previously entered data.

For example:
	
- Basic event data (title, organizer, space, date/time)
- Follow-up submission of event image(s)
- Addition of external links, genre and event types, or accessibility flags
- Update or revision of any field at a later time

By supporting this workflow, the API makes it easy to build user-friendly and fail-safe event creation interfaces.


---

# Create Basic Event

To create a new event via the API, you need to build a structured JSON object containing all required fields such as organization_id, venue_id, title, description, and date-related information.

!!! note
    Creating an event is only allowed for authenticated users who have permission to create events. Make sure the user is logged in and has the appropriate roles or access rights.


## Example JSON Payload

The following are examples of payload sent to the API:

#### Minimal example
```json
{
  "release_status": "review",
  "content_language": "de",
  "organization_id": 5,
  "organization_key": "3fx1aWgqc7Pe5oJJhAZ2TL",
  "title": "Recorder Recorder",
  "description": "Recorder Recorder ist das elektroakustische ...",
  "dates": [
    {
      "start_date": "2025-11-01",
      "start_time": "20:00"
    }
  ],
  "venue_id": 13
}
```


#### Full example

```json
{
  "release_status": "released",
  "release_date": "2025-09-01",
  "content_language": "de",
  "title": "Autumn Music Festival",
  "description": "A vibrant celebration of music, food, and culture in the heart of the city.",
  "subtitle": "Experience the sounds of fall",
  "tags": ["music", "festival", "autumn", "outdoor"],
  "source_url": "https://example.com/events/autumn-music-festival",
  "online_event_url": null,
  "organization_id": 42,
  "organization_key": "3fx1aWgqc7Pe5oJJhAZ2TL",
  "venue_id": null,
  "space_id": null,
  "external_id": "9876",
  "participation_info": "Bring your own blanket and snacks.",
  "occation_type_id": 2,
  "languages": ["en", "de"],
  "min_age": 12,
  "max_age": 99,
  "meeting_point": "Main entrance, City Park",
  "max_attendees": 500,
  "price_type_id": 1,
  "currency_code": "EUR",
  "ticket_link": "https://xyz.com/tickets/12345678",
  "ticket_advance": true,
  "ticket_required": true,
  "registration_required": true,
  "custom": "Special VIP access for sponsors",
  "style": "outdoor festival",
  "dates": [
    {
      "start_date": "2025-10-10",
      "start_time": "12:00",
      "end_date": "2025-10-12",
      "end_time": "22:00",
      "entry_time": "11:30",
      "venue_id": null,
      "space_id": null,
      "all_day": false
    }
  ],
  "types": [
    {
      "type_id": 1,
      "genre_id": 5
    },
    {
      "type_id": 2,
      "genre_id": null
    }
  ]
}
```


!!! tip
    You can create an event with multiple dates by adding additional entries to the event_dates array. Each object in the array represents a separate occurrence of the event with its own start time, entry time, and flags. If a specific occurrence takes place in a **different venue/space** than the main `venue_id` and `space_id` defined at the top level, you can override it by setting the `venue_id` and `space_id` field within that `event_dates` object.




