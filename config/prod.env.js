'use strict'
var version = require('./version')
module.exports = {
  NODE_ENV: '"production"',
  APP_INFO: JSON.stringify(version)
}
