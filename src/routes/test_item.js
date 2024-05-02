import { item as itemInfo, player } from "../items/temp_info.js"
import Item from "../items/item.js"

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function testItem(req, res) {
  const item = new Item("weapon", { name: "an name", damage: 5, weight: 25, durability: 9000 })
  let str = ""
  str += JSON.stringify(itemInfo)
  /** @type {Player} */
  try {
    switch (req.body.useType) {
      case "attack":
        item.attack(player)
        break
      case "use":
        item.use(player)
        break
      case "consume":
        item.consume(player)
        break
      default:
        console.log("default case hit")
        break
    }
  }
  catch (/** @type {ErrorEvent}*/err) {
    console.log(err)
  }
  str += "\n\n\n\n"
  str += JSON.stringify(itemInfo)
  res.json(str)
}