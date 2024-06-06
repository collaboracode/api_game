import DatabaseController from "../../databaseController";

function seedDb() {
  const dbc = new DatabaseController()
  const p1 = dbc.createCollection("game_info")
  const p2 = dbc.createCollection("items")
  const p3 = dbc.createCollection("players")
}