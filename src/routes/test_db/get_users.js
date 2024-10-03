import { UserDatabaseController } from "../../UserDatabaseController.js"
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function getUsers(req, res) {
  // res.status(200).json({})
  const dbc = new UserDatabaseController()
  dbc.getUsers().then(list => {

    res.status(200).json(list)
  }).catch(err => {
    res.status(500).json(err)
  })
}