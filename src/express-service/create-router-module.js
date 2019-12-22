const express = require('express')
const outerHandleRoutes = require('./handle-routes')
/**
 * @param {{method: string, path: string, middleware: Function[]}[]} routes 
 */
function createRouterModule(routes) {
  const router = express.Router()

  const handleRoutes = outerHandleRoutes(router)

  return handleRoutes(routes)
}

module.exports = createRouterModule