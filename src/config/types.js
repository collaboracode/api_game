/**
 * @typedef Route
 * @property {string} path
 * @property {string} usage
 * @property {string} authRequirements
 * @property {() => void} handler
 */

/**
 * @typedef Player
 * @property {string} name
 * @property {number} health
 * @property {MapNode | null} currentNode
 * @property {MapNode | null} nextNode
 * @property {number} currentToNextNodeProgress - This should be a percentage from 0 to 100
 */

/**
 * @typedef Building
 * @property {number} health
 */

/**
 * @typedef Item
 * @property {string} name
 * @property {number} health
 * 
 */

/**
 * @typedef MapRequirement
 * @property {Item} Item
 * @property {number} stamina
 */

/**
 * @typedef NodeConnection
 * @property {MapNode} node
 * @property {MapRequirement[]} requirements
 * @property {string} connectionDescription
 */

/**
 * @typedef MapNode
 * @property {number} generatorNumber
 * @property {NodeConnection[]} connections
 * @property {MapNode[]} visibleNodes - different since we may want ones that you can see, but not reach
 * @property {{x: number, y: number}} position - The position on the map
 * @property {NodeType} nodeKind - 0 is a meadow, 1 is a stream, 2 is a hill, 3 is a wood, 4 is a forest, 5 is a mountain, 6 is a structure, 7 is a desert, 8 is a swamp, 9 is a cave, 10 is a river, 11 is a lake, 12 is an ocean, 13 is a cliff, 14 is a mine, 15 is a field, 16 is a garden, 17 is a park, 18 is a graveyard, 19 is a jungle, 20 is a sea, 21 is a beach, 22 is a coast
 * @param {0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22} NodeType
 * @property {number} elevation
 * @property {number} moisture
 * @property {number} temperature
 */

/** 
 * @typedef Wildlife
 * @property {string} name
 * @property {number} health
 * @property {number} stamina
 * @property {boolean} isAggressive
 * @property {boolean} isDefensive
 * @property {number} attack
 * @property {number} defense
 * @property {number} speed
 * @property {number} fat
 * @property {number} protein
 * @property {Item[]} yields
 * @property {number} minYieldCount
 * @property {number} maxYieldCount
 * @property {{x: number, y: number}} position
 */

/**
 * @typedef GameMap
 * @property {number} seed
 * @property {{x: number, y: number}} size
 * @property {MapNode[]} nodes
 * @property
 */
