import '../config/types.js'
/**
 * @type {Consumable}
 */
export const item = {
  name: "bandage",
  type: "consumable",
  remainingPercentage: 100,
  durability: 100,
  status: [],
  weight: 0.1,
  healthRegen: 100,
  perUsePercentage: 20
}

/**
 * @type {Player}
 */
export const player = {
  name: "John Smith",
  currentNode: null,
  nextNode: null,
  currentToNextNodeProgress: 0,
  health: 100,
  hunger: 100,
  thirst: 0,
  weightCap: 100,
  inventory: [],
}
export default item