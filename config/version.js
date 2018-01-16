const path = require('path')
const pkg = require(path.resolve(process.cwd(), 'package.json'))

module.exports = {
  projectName: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  appName: pkg.app && pkg.app.name || pkg.appName,
  dependencies: pkg.dependencies,
  engines: pkg.engines,
  license: pkg.license
}