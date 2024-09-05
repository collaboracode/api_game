import { UserDatabaseController } from "../../databaseController"
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function getUsers(req, res) {
  const dbc = new UserDatabaseController()
 
  dbc.createUser(username, email, password).then(list => {

    res.status(200).json(list)
  }).catch(err => {
    res.status(500)
  })
}