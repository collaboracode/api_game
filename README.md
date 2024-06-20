# API_GAME
This is a game you play via a terminal using something like curl requests or a program like Postman, or Insomnia

## Getting started.
### Environment
You will need a env file usable names (local.env | .env | production.env)
- local.env example
```bash
DATABASE_URL="mongodb://mongo:27017"
```
### Running server.
#### Run just the API
In your terminal enter
```bash
npm start
```
or 
```bash
node index.js
```

#### Run API with mongo container
First run the docker setup script
```bash
sudo ./docker_setup.sh
```
Then run the containers with
```bash
sudo docker compose up
```

## Available routes 
Visit **/routes** to see the routes available.

## Config
### Routes
The routeIndex.js file is where we define the routes, which is made up of objects.
```
path: "/desired_route",
method:"GET" || "PUT" || "POST" || "PATCH" || "DELETE",
usage: "description of what it is used for",
authRequirements: "The type of auth required",
handler: fn() - the function that runs when you visit the route.
```


# Docker setup
if using apt as package manager, you should be able to run
```bash
sudo ./docker_setup.sh
```
if it is not executable then run
```bash
chmod +x ./docker_setup.sh
```