import DatabaseController from "../databaseController.js";
import item from "../items/tempItemInfo.js";
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function testDatabase(req, res) {
  const dbc = new DatabaseController()
  // dbc.getStatus().then(status => res.json(status))
  dbc.getCollections().then(val => {
    console.log(val)
    res.json(val)
  })
}