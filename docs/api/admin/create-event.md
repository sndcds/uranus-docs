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


#### Optional information

```json
{
  // Basic data here ...
  "space_id": 88, // To be used only if venue_id != null
  "external_id": 872,
  "subtitle": "Painting for Beginners",
  "teaser_text": "Bring your own brushes!",
  "participation_info": "Remember outdoor clothing",
  "meeting_point": "Tourist Information",
  "languages": ["de", "da", "en"],
  "min_age": 3,
  "max_age": 8,
  "max_attendees": 8,
  "price_type_id": 1,
  "ticket_advance": true,
  "ticket_required": true,
  "registration_required": false,
  "currency_code": "EUR",
  "online_event_url": "https://zoom.grain.ione/s873a",
  "occation_type_id": 3,
  "source_url": "https://domain.com/event123",
  "tags": ["music", "synthesizer", "experimental"],
  "types": [
    {"type_id": 1, "genre_id": 66},
    {"type_id": 1, "genre_id": 1}
  ],
  "dates": [
    {
      "start_date": "2025-12-05", // Required!
      "start_time": "10:00", // Required!
      "end_date": "2025-12-06", 
      "end_time": "15:00",
      "entry_time": "09:30",
      "all_day": true
    },
    // Add more dates if needed
  ],
  "release_date": "2025-11-20",
  "release_status_id": 2,

  "custom": "...", // Used for custom text information
  "style": "...", // Used for custom style codes
}
```


!!! tip
    You can create an event with multiple dates by adding additional entries to the event_dates array. Each object in the array represents a separate occurrence of the event with its own start time, entry time, and flags. If a specific occurrence takes place in a **different venue/space** than the main `venue_id` and `space_id` defined at the top level, you can override it by setting the `venue_id` and `space_id` field within that `event_dates` object.




