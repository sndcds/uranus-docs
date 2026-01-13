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

To create a new event via the API, you need to build a structured JSON object containing all required fields such as organizer_id, venue_id, title, description, and date-related information.

!!! note
    Creating an event is only allowed for authenticated users who have permission to create events. Make sure the user is logged in and has the appropriate roles or access rights.


## Variants

There are two ways to specify the location of an event:

1.	**Using an existing venue:**
    - Set the venue_id field to the ID of the venue.
    - location should be omitted or null.
    - The event will be associated with the existing venue.
2.	**Creating a custom location inline:**
    - Omit venue_id and instead provide a location object with address and coordinates.
    - The API will automatically create a new entry in the event_locations table and associate the event with it.
    - Useful when the event takes place somewhere that is not yet in the system.



## Example JSON Payload

The following are examples of payload sent to the API:

#### Event using an existing venue, required data only
```json
{
  "organizer_id": 5,
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

#### Event using inline location creation, required data only
```json
{
  "organizer_id": 42,
  "title": "Art Workshop",
  "description": "Learn watercolor painting in this beginner-friendly workshop.",
  "dates": [
    {
      "start_date": "2025-12-05",
      "start_time": "10:00"
    }
  ],
  "location": {
    "name": "KRAN", // Optional
    "street": "Am Nordertor",
    "postal_code": "24939",
    "city": "Flensburg",
    "country_code": "DE",
    "state_code": "SH", // Optional
    "latitude": 54.23, // Optional
    "longitude": 9.873 // Optional
  },
}
```


#### Full example

```json
{
  "title": "Autumn Music Festival",
  "description": "A vibrant celebration of music, food, and culture in the heart of the city.",
  "subtitle": "Experience the sounds of fall",
  "teaser_text": "Join us for a weekend of unforgettable performances!",
  "tags": ["music", "festival", "autumn", "outdoor"],
  "source_url": "https://example.com/events/autumn-music-festival",
  "online_event_url": null,
  "organizer_id": 42,
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
  "ticket_advance": true,
  "ticket_required": true,
  "registration_required": true,
  "custom": "Special VIP access for sponsors",
  "style": "outdoor festival",
  "release_status_id": 1,
  "release_date": "2025-09-01",
  "location": {
    "name": "City Park",
    "description": "A large public park in downtown",
    "street": "Park Avenue",
    "house_number": "123",
    "postal_code": "10115",
    "city": "Berlin",
    "country_code": "DE",
    "state_code": "BE",
    "latitude": 52.520008,
    "longitude": 13.404954
  },
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




