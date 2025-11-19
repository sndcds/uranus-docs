# Technical Foundation

Uranus is built on a modern and efficient technology stack to ensure reliability, performance, and extensibility:


**Uranus API Server**  
The backend service, a RESTful API server, is implemented in Go, providing a fast, lightweight, and maintainable interface for data access and manipulation. Go’s strong concurrency model and minimal dependencies make it ideal for scalable web services.  
[Read more about the API](../api/index.md)


**Database**  
The data is stored in a PostgreSQL database, enhanced with the PostGIS extension to support geographic queries and spatial data types. This enables precise location handling for venues, events, and mapping features.  
[Read more about the Database](../database/index.md)


**Pluto Image Server**  
The Pluto Image Server is a separate service that is fully integrated into Uranus.
Its configuration is included in the main Uranus configuration file, and the Pluto service runs within the Uranus environment.