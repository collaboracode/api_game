/**
 * @param {"attack" | "use" | "consume"} action
 * @param {Item | Consumable} item 
 * @param {Item | Player | MapNode} target
 */
export default function useItem(action, item, target) {
  if (item.durability <= 0) {
    throw "Item is broken"
  }
  if (!action || !item || !target) {
    throw new Error("Incorrect params")
  }

  switch (action) {
    case "attack":
      item.durability -= item.perUsePercentage
      target.health -= item.damage
      break
    case "use":
      if (item.type === "consumable") {
        //? this might not be the best way of doing this.
        target.health += (item.health / 100) * item.remainingPercentage
        target.hunger += (item.hunger / 100) * item.remainingPercentage
        target.thirst += (item.thirst / 100) * item.remainingPercentage
        item.remainingPercentage -= item.perUsePercentage ?? 0
      } else {
        // todo figure out the rest of this
        item.durability -= item.perUseCost ?? 0
      }
      break
    case "consume":
      if (item.type === "consumable") {
        target.health += item.health
        target.hunger += item.hunger
        target.thirst += item.thirst
        item.remainingPercentage = 0
      }
      break
  }

}