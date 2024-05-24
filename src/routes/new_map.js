// import createMap from '../game_map/createMap.js'
import displayMap from '../commonFunctions/displayMap.js'
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function newMap(req, res) {
  console.log("body: ", req.body.seed)
  const params = {
    seed: req.body.seed ?? undefined,
    width: req.body.width ?? undefined,
    height: req.body.height ?? undefined,
  }
  const map = createMap(params.seed, params.width, params.height)
  console.log(displayMap(map))
  res.json(map)
}
/**
 * @param {number} width
 * @param {number} height
 * @returns {GameMap}
 */

export function createMap(seed = Math.random() * 8, width, height) {
  const defaultSize = 8
  let x = width
  let y = height

  // if only one is entered the other will be the same to make a square
  if (width === undefined) {
    x = height === undefined ? defaultSize : height
  }
  if (height === undefined){
    y = width === undefined ? defaultSize : width
  }
  /**
   * @type {GameMap}
   */
  const map = {
    seed: seed,
    size: { x: x, y: y },
    nodes: []
  };

  /*
    trying to have the generation be in relation to the middle
    there is probably a better way to do this, but this is a quick example of the thought
    which may not work out
  */
  const middleOfMap = { x: Math.floor(x / 2), y: Math.floor(y / 2) };
  for (let row = 0; row <= y; row++) {
    for (let col = 0; col <= x; col++) {
      const distX = Math.abs(middleOfMap.x - col)
      const distY = Math.abs(middleOfMap.y - row)
      const distFromCenter = Math.sqrt(distX * distX + distY * distY)
      const val1 = Math.sin(Math.sqrt(((Math.PI + seed) * (seed + (distX + dist ?? Math.PI))) % ((distFromCenter + Math.PI) % Math.PI))) % Math.PI
      const val2 = Math.cos((Math.sqrt((Math.PI + seed) * (seed + (distY + distX ?? Math.PI))) % ((distFromCenter + Math.PI) % Math.PI))) % Math.PI
      const finalVal = val1 + val2;
      if (Math.abs(finalVal) > 1.5) {
        map.nodes.push({ position: { x: col, y: row }, generatorNumber: finalVal, nodeKind: Math.floor((Math.abs(finalVal) * 22) % 22) });
      }
    }
  }
  return map;
}

const params = {
  seed: "optional",
  width: "optional",
  height: "optional"
}
export { params }