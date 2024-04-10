import './types.js'
import about from "../routes/about.js"
import root from "../routes/root.js"
import availbleRoutes from '../routes/availableRoutes.js'
import genMap from '../routes/genMap.js'
import testItem from '../routes/test_item.js'
// todo make a type for authRequirements, so that we can have standard options for it.

/**
 * @type {Route[]}
 */
const routes = [
  {
    path: "/",
    method: "GET",
    usage: "This route GETs you to the welcome and an overview of how to use it.",
    authRequirements: "none",
    handler: root
  },
  {
    path: "/about",
    method: "GET",
    usage: "this is the about route which gives an overview of project",
    authRequirements: "none",
    handler: about
  },
  {
    path: "/routes",
    method: "GET",
    usage: "This is used to GET the full list of available routes",
    authRequirements: "none",
    handler: availbleRoutes
  },
  {
    path: "/gen_map",
    method: "PUT",
    usage: "This is a test of the map generator",
    authRequirements: "token required (probably)",
    handler: genMap
  },
  {
    path: "/test_item",
    method: "GET",
    usage: "This route is used to test the item system",
    authRequirements: "none",
    handler: testItem
  }
]
export default routes