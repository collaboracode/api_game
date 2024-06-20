import DatabaseController from "../../databaseController";

export default function seedDb() {
  const dbc = new DatabaseController()
  // const p1 = dbc.createCollection("")
  const p2 = dbc.createCollection("games")
  const p3 = dbc.createCollection("users")
}