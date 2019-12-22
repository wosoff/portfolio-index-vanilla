const ExpressService = require('./express-service')
const routes = require('./routes')

ExpressService.listenHTTPS()
ExpressService.handleRoutes(routes)