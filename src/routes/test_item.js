import item from "../items/tempItemInfo.js"
import useItem from "../items/useItem.js"

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function testItem(req, res) {
  
  let str = ""
  str += JSON.stringify(item)
  /** @type {Player} */
  const player = {}
  try {

    useItem(req.body.useType, item, player)
  }
  catch (/** @type {ErrorEvent}*/err) {
    console.log(err)
  }
  str += "\n\n\n\n"
  str += JSON.stringify(item)
  res.json(str)
}