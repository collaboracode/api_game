import './config/types.js'
import routes from "./config/routeIndex.js"
import express from 'express'

/**
 * @property {Express} app
 */
class Router {
  /**
   * @param {number} port
   */
  constructor(port) {
    this.app = express()
    // adding middleware to parse json body
    this.app.use(express.json())

    this.app.listen(port, (error) => {
      if (!error) {
        console.log("Server is Successfully Running, and this.app is listening on port " + port)
      }
      else {
        console.log("Error occurred, server can't start", error)
      }
    })

  

    this.routes = routes
    this.routes.forEach(route => {
      switch (route.method) {
        case "get":
          this.app.get(route.path, route.handler)
          break
        case "put":
          this.app.put(route.path, route.handler)
          break
        case "post":
          this.app.post(route.path, route.handler)
          break
        case "patch":
          this.app.patch(route.path, route.handler)
          break
        case "delete":
          this.app.delete(route.path, route.handler)
          break
      }


      this.app.get(`/docs${route.path}`, /**@param {Request} req @param {Response} res */(req, res) => {
        /**
         * @type {Route}
         */
        const routeInfo = {
          path: route.path,
          method: route.method,
          usage: route.usage,
          authRequirements: route.authRequirements,
          params: route.params ?? undefined
        }
        res.json(routeInfo)
      })
    })
  }
  /**
   * This function will return info about the given route,
   * and will throw an error on failure.
   * @param {string} path
   * @returns {routeInfo}
   */
  getDocsForRoute(path) {
    const routeInfo = routes.find((obj) => obj.path === path)
    if (routeInfo === undefined) {
      throw new Error("Route not found")
    }
    return routeInfo
  }

}

export default Router