import { UserDatabaseController } from "../../UserDatabaseController.js";

(async function() {
  const dbc = new UserDatabaseController
  for (let i = 0; i < 100; i++) {
    await dbc.createUser(`User${i}`, `email${i}@example.com`, "password")
  }
  // const dbc = new DatabaseController()
  // // const p1 = dbc.createCollection("")
  // const p2 = dbc.createCollection("games")
  // const p3 = dbc.createCollection("users")
})()