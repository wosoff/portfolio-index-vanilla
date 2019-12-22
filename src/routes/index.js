const fs = require('fs')
const util = require('util')

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {void}
 */
function respondIndex(req, res) {
  util.promisify(fs.readFile)('public/index.html')
    .then(file => {
      res.end(file)
    }).catch(e => {
      console.log(e)
    })
}

const indexRoute = [
  {
    method: 'get',
    path: '/',
    middleware: [
      respondIndex
    ]
  }
]

module.exports = [
  ...indexRoute
]