import { UserDatabaseController } from "../../UserDatabaseController.js"
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function createUser(req, res) {
  const dbc = new UserDatabaseController()
  const { username, email, password } = req.body
  dbc.createUser(username, email, password)
  .then(result => {
    res.status(201).json(result)
  })
  .catch(err => res.json({Error: "is error", err}))
}