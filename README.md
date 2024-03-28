# API_GAME
This is a game you play via a terminal using something like curl requests or a program like Postman, or Insomnia

## Getting started.

### Running server.
Run in terminal
```bash
npm start
```
or 
```bash
node index.js
```
## Available routes 
Visit **/routes** to see the routes available.

# Config
### Routes
The routeIndex.js file is where we define the routes, which is made up of objects.
```
path: "/desired_route",
method:"GET" || "PUT" || "POST" || "PATCH" || "DELETE",
usage: "description of what it is used for",
authRequirements: "The type of auth required",
handler: fn() - the function that runs when you visit the route.
```