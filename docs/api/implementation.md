# API Implementation

The Uranus API is implemented as a lightweight web service written in [Go ↗](https://go.dev/). It exposes a set of focused endpoints designed to handle data efficiently.

Each request to the API is processed by the service, which attempts to return either the requested result or an appropriate error code along with a descriptive message. This design ensures clear feedback, simplifies integration, and supports reliable communication between systems.

The API is structured for flexibility and extensibility, making it suitable for both frontend applications and backend services.

Go was chosen for its simplicity, performance, and reliability — it requires no external dependencies, is easy to install, offers stable and fast execution, and provides flexible routing and parameter handling ideal for building robust APIs.


## API Response Structure

The Uranus API delivers data in **JSON format**, which is structured and ready for direct use in frontend applications or client-side tools.

### How it Works

The data pipeline is designed for **clarity, flexibility, and maintainability**:

1. **PostgreSQL** is responsible for storing and retrieving structured **row-based data**.
2. The **Go server** receives this row data through queries.
3. Go then **maps** the rows into strongly-typed data structures and **encodes them as JSON** before returning them to the client.

This separation ensures that:

- The **database remains focused** on fast, reliable data storage and filtering.
- The **application layer (Go)** has full control over how data is presented to the client.

### Why Not Return JSON Directly from PostgreSQL?

While PostgreSQL has powerful JSON functions (like `json_agg`, `row_to_json`, `json_build_object`, etc.), this project intentionally **delegates JSON creation to Go** for several reasons:

- **Maintainability**: Business logic and formatting stay in the application layer.
- **Flexibility**: Easier to modify, restructure, or enrich responses.
- **Consistency**: Uniform handling of errors, metadata, and response formatting.
- **Debugging**: Errors are easier to trace and fix in Go than in complex SQL JSON queries.
