import DatabaseController from "../../../databaseController.js";
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function getCollectionsList(req, res) {
  const dbc = new DatabaseController()
  // dbc.getStatus().then(status => res.json(status))
  // dbc.createCollection(req.body.name ?? "").then(() => {

  dbc.getCollections().then(val => {
    console.log(val)
    res.json(val)
  })
  // })
}