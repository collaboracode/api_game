import {DatabaseController} from "../../../databaseController.js";
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function insertOne(res, req) {
  const dbc = new DatabaseController()
  const collectionName = req.body.collectionName ?? ""
  const data = req.body.data
  dbc.insertOne(collectionName, data).then(val => {
    console.log(val)
    res.json(val)
  })

}