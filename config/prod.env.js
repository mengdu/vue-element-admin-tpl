'use strict'
const version = require('./version')
module.exports = {
  NODE_ENV: '"production"',
  APP_INFO: process.env.APP_INFO || JSON.stringify(version)
}
