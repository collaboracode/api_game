import DatabaseController from "../../databaseController"
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export function createUser(req, res) {
  const dbc = new DatabaseController()
  // dbc.getStatus().then(status => res.json(status))
  const fmt = () => {
    res.status().json({requiredFormat: {username: "string"}})
  }
  if (!req.bodyUsed) {
    fmt()
    return 
  }
  const {username} = res.body
  if (typeof username !== 'string') {
   fmt()
   return 
  }
  dbc.insertOne(process.env.PLAYER_COLLECTION_NAME, {username}).then(() => {
    
  })
}