# Event

**An event represents a specific activity or occurrence organized by an entity and held at a particular space within a venue. Each event is directly linked to an organizer (`organizer_id`) and a space (`space_id`), anchoring it within the broader organizational and spatial context.**


The event is described through a variety of fields to capture both essential and rich contextual information. The `title` and `description` provide the main textual content that defines the event, while optional fields like `teaser_text` and `subtitle` offer additional summary or promotional details.

Events can specify supported `languages` to indicate the languages in which the event is conducted or accessible. Age restrictions are managed through the `min_age` and `max_age` fields, supporting targeted audience definition.

Further information can be provided via URLs (`url` and `source_url`) linking to external resources, official event pages, or ticketing platforms. The `custom` and `style` fields allow for flexible metadata or classification relevant to the event’s nature or presentation.

Operational details include the `release_date` for publication or announcement timing, `participation_info` for describing how attendees can engage or register, and `meeting_point` details that inform visitors about gathering locations related to the event.

Creation and modification timestamps ensure the event data’s lifecycle is traceable for auditing and updates.


Overall, the event table is designed to comprehensively represent the diverse aspects of cultural, social, or other types of events, facilitating detailed management, discovery, and presentation within the Uranus platform.