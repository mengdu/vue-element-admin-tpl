'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// const version = require('./version')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // APP_INFO: JSON.stringify(version)
})
