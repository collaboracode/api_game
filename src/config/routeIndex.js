import './types.js'
import about from "../routes/about.js"
import root from "../routes/root.js"
import availableRoutes from '../routes/route_list.js'
import newMap, {params as newMapParams} from '../routes/new_map.js'

// todo make a type for authRequirements, so that we can have standard options for it.

/**
 * @type {Route[]}
 */
const routes = [
  {
    path: "/",
    method: "get",
    usage: "This route gets you to the welcome and an overview of how to use it.",
    authRequirements: "none",
    handler: root
  },
  {
    path: "/about",
    method: "get",
    usage: "this is the about route which gives an overview of project",
    authRequirements: "none",
    handler: about
  },
  {
    path: "/routes",
    method: "get",
    usage: "This is used to get the full list of available routes",
    authRequirements: "none",
    handler: availableRoutes
  },
  {
    path: "/new_map",
    method: "put",
    usage: "This is a test of the map generator",
    params: newMapParams,
    authRequirements: "token required (probably)",
    handler: newMap
  }


]
export default routes