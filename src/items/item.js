/*
todo
? maybe look into moving the target attr changes occur on the target,
? so that there can more easily have modifiers.
*/
/**
 * @type {Item & __ConsumableItem}
 */
export default class Item {
  /**
   * @param {"weapon" | "tool" | "consumable"} typeOfItem
   * @param {{
   * name: string
   * damage?: number,
   * durability?: number,
   * status?: Status,
   * weight?: number,
   * canBeUsedOn?: string[]
   * } | undefined} params
   */
  constructor(typeOfItem, params) {
    this.type = typeOfItem
    this.damage = params.damage ?? 0
    this.status = []
    this.weight = params.weight ?? 0
    this.canBeUsedOn = params.canBeUsedOn ?? []
  }

  /**
   * @param {Item | Player | MapNode} target 
   */
  use(target) {
    if (this.item.durability <= 0) throw "Item is broken"
    if (!target) throw "Missing target input"

    if (item.type === "consumable") {
      //? this might not be the best way of doing this.
      if (this.item.remainingPercentage <= 0) throw "Item is out of uses"
      target.health += (this.item.health / 100) * this.item.remainingPercentage
      target.hunger += (this.item.hunger / 100) * this.item.remainingPercentage
      target.thirst += (this.item.thirst / 100) * this.item.remainingPercentage
      this.item.remainingPercentage -= this.item.perUsePercentage ?? 0
    } else {
      // todo figure out the rest of this
      this.item.durability -= this.item.perUseCost ?? 0
    }
  }

  /**
   * @param {Player} consumer 
   */
  consume(consumer) {
    if (this.item.durability <= 0) throw "Item is broken"
    if (this.item.remainingPercentage <= 0) throw "Item is out of uses"
    if (!consumer) throw "Missing consumer input"
    consumer.health += this.item.health
    consumer.hunger += this.item.hunger
    consumer.thirst += this.item.thirst
    this.item.remainingPercentage = 0
  }

  /**
   * @param {Player} target 
   */
  attack(target) {
    if (this.item.durability <= 0) throw "Item is broken"
    if (!target) throw "Missing target input"
    this.item.durability -= this.item.perUsePercentage
    target.health -= this.item.damage
  }
}
