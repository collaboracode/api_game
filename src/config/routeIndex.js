import './types.js'
import about from "../routes/about.js"
import root from "../routes/root.js"
import availableRoutes from '../routes/availableRoutes.js'
import genMap from '../routes/genMap.js'
import characterGenerator from '../routes/characterGen.js'


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
    path: "/gen_map",
    method: "put",
    usage: "This is a test of the map generator",
    authRequirements: "token required (probably)",
    handler: genMap
  },
  {
    path: "/char_gen",
    method: "get",
    usage: "This is a test of the character generator",
    authRequirements: "token required (future implementation)",
    handler: characterGenerator 
  }


]
export default routes