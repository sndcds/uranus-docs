# Uranus API Server

**The Uranus API server is a backend service implemented in Go, designed to provide API endpoints for interacting with application data stored in a PostgreSQL database.**


## Starting the Database

The Uranus API server relies on a PostgreSQL database for storing and retrieving all application data.
During startup, the server initializes its database connection pool and performs any required setup tasks.
If the database is not available at this moment, the server cannot complete its initialization and will terminate.

Requiring the database to be running at startup ensures that:

- All API endpoints have immediate access to the data they need.
- The server starts in a fully functional state, avoiding partial or degraded operation.
- Configuration and schema checks can be performed reliably before handling any requests.

Once running, the Uranus API server can recover from temporary database outages by automatically re-establishing the connection when the database becomes available again.


## Starting the Server

By default, the server reads its configuration from a file named config.json located in the program directory.

```bash
go run uranus-api.go
```

To start the server with a custom configuration file, use the `-config` flag: 

```bash
go run uranus-api.go -config config-local.json
```

### Build and run as a binary

For production use, you can compile the program first:

```bash
go build -o uranus-api uranus-api.go
```

Then start it:

```bash
./uranus-api
```

Or with a custom configuration file:

```bash
./uranus-api -config config-local.json
```

## Configuration

At startup, Uranus reads its settings from a configuration file.

This file defines key parameters such as:

- Database credentials (user, password, host, port, database name)
- Other runtime options controlling server behavior

Configuration example:

```json
{
  "verbose": true,
  "dev_mode": true,
  "port": 9090,
  "base_api_url": "http://localhost:9090",
  "use_router_middleware": true,
  "db_host": "localhost",
  "db_port": 5432,
  "db_user": "pippa",
  "db_password": "",
  "db_name": "pippa-db",
  "db_schema": "uranus",
  "ssl_mode": "disabled",
  "allow_origins": [
    "http://localhost:8009",
    "https://uranus.grain.one"
  ],
  "pluto_verbose": true,
  "pluto_image_dir": "~/uranus/pluto/image",
  "pluto_cache_dir": "~/uranus/pluto/cache",
  "jwt_secret": "...",
  "auth_token_expiration_time": 3600
}

```
