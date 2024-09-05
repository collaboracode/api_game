import { UserDatabaseController } from "../../databaseController.js"
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function createUser(req, res) {
  const dbc = new UserDatabaseController()
  // dbc.getStatus().then(status => res.json(status))
  const fmt = () => {
    res.status().json({
      requiredFormat: {
        username: "string [255]",
        email: "string [255]",
        password: "string [255]"
      }
    })
  }
  if (!req.bodyUsed) {
    fmt()
    return
  }
  const { username, email, password } = res.body
  if (typeof username !== 'string' || email !== 'string' || password !== 'string'
    || username.length > 255 || email.length > 255 || password.length > 255) {
    fmt()
    return
  }
  dbc.createUser(username, email, password)
}