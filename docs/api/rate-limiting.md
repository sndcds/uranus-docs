# API Rate Limiting on a Hosting Service

Rate limiting is a mechanism used to control the amount of requests a client can make to an API within a specified time frame. On our hosting platform, rate limiting ensures fair usage, prevents abuse, and protects our servers from overload.


## API Endpoints Rate Limiting

Each API endpoint has a defined limit of requests per minute. When a client exceeds this limit, the server responds with an HTTP `429 Too Many Requests` error.

### Example Limits

| Endpoint                  | Limit           | Time Window |
|----------------------------|----------------|-------------|
| `GET /api/events`          | 60 requests    | 1 minute    |
| `POST /api/events`         | 30 requests    | 1 minute    |
| `GET /api/venues`          | 100 requests   | 1 minute    |
| `PUT /api/venues/:id`      | 20 requests    | 1 minute    |

### Response on Exceeding Limits

When a client exceeds the allowed limit:

```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json

{
  "error": "Rate limit exceeded",
  "retry_after": 45
}
```

retry_after indicates the number of seconds the client should wait before retrying.


### Login / Authentication Rate Limiting

Login endpoints have stricter rate limits to protect against brute-force attacks.


| Endpoint              | Limit       | Time Window |
|-----------------------|-------------|-------------|
| `POST /api/login`     | 5 attempts  | 5 minutes   |
| `POST /api/signup`    | 10 requests | 10 minutes  |

Important Notes:
- Exceeding the login limit may temporarily lock the account or IP address.
 -Always implement retry logic with exponential backoff to avoid unnecessary lockouts.

## Best Practices
1. Use Caching: Cache frequent GET requests to reduce repeated hits to the API.
2. Implement Backoff: When receiving a 429 response, wait for the retry_after duration before retrying.
3. Distribute Requests: Spread API calls over time instead of sending bursts.
4. Monitor Usage: Track your request usage to avoid hitting limits unexpectedly.
5. Use API Keys: API keys help monitor usage and provide higher limits for trusted clients.