# RESTful API

## Core Characteristics

1.	**Stateless**
    - Each request from the client must contain all the information the server needs to fulfill it.
    - No session or user context is stored on the server between requests.
2.	**Client-Server Architecture**
    - The client and server are separate entities that communicate over HTTP.
    - This separation allows them to evolve independently.
3.	**Uniform Interface**
    - RESTful APIs use consistent conventions to interact with resources:
        - GET to retrieve data
        - POST to create data
        - PUT or PATCH to update data
        - DELETE to remove data
4.	**Resource-Based**
    - Everything is treated as a resource, identified by a URL (e.g., /events?id=123).
    - Resources are represented in standard formats like JSON or XML.
5.	**Representation-Oriented**
    - Clients interact with resource representations, typically JSON or XML, rather than direct access to data structures.
6.	**Stateless Communication**
  -   No client context is stored on the server between requests.
7.	**Cacheable**
    - Responses must explicitly indicate whether they are cacheable or not, improving performance and scalability.
8.	**Layered System**
    - Intermediaries (like proxies or load balancers) can be used without affecting the client-server interaction.


[Wiki: RESTful API ↗](https://en.wikipedia.org/wiki/REST)