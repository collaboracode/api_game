import DatabaseController from "../../databaseController.js";
import item from "../../items/tempItemInfo.js";
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export function createCollection(req, res) {
  const dbc = new DatabaseController()
  // dbc.getStatus().then(status => res.json(status))
  dbc.createCollection(req.body.name ?? "").then(() => {

    dbc.getCollections().then(val => {
      console.log(val)
      res.json(val)
    })
  })
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export function getCollectionsList(req, res) {
  const dbc = new DatabaseController()
  // dbc.getStatus().then(status => res.json(status))
  // dbc.createCollection(req.body.name ?? "").then(() => {

  dbc.getCollections().then(val => {
    console.log(val)
    res.json(val)
  })
  // })
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export function insertOne(res, req) {
  const dbc = new DatabaseController()
  const collectionName = req.body.collectionName ?? ""
  const data = req.body.data
  dbc.insertOne(collectionName, data).then(val => {
    console.log(val)
    res.json(val)
  })

}