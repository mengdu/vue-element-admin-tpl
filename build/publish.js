const path = require('path')
const crypto = require('crypto')
const child_process = require('child_process')

const exec = child_process.exec
const spawn = child_process.spawn


var options = {
  cwd: process.cwd()
}
// major.minor.patch

var versionType = 'patch'
if (process.argv.indexOf('major') > -1) {
  versionType = 'major'
} else if (process.argv.indexOf('minor') > -1) {
  versionType = 'minor'
}

var buildScript = path.resolve(process.cwd(), 'build/build.js')
var versionScript = 'npm version ' + versionType
console.log(versionScript)
// 执行npm version xxx打上版本
exec(versionScript, options, function (err, stdout, stderr) {
  if (err) {
    console.error('err:', err)
    process.exit(1)
  }
  console.log(stdout)
  console.log('set APP_INFO...')
  // 设置本次打包信息
  setAppInfo()
  console.log('node build/build.js')
  console.log('building...\n\n')
  // 执行打包进程
  var bat = spawn('node', [buildScript], options)
  bat.stdout.on('data', data => {
    console.log(data.toString())
  })
})

function hash (data, encoding, algorithm) {
  var h = crypto.createHash(algorithm || 'SHA1')
  h.update(data)
  return h.digest(encoding || 'hex')
}

function setAppInfo () {
  var version = require(path.resolve(process.cwd(), 'config/version'))
  var date = new Date()
  var randomString = crypto.randomBytes(16).toString('hex') + date.toString()
  var md5 = hash(randomString, 'hex', 'md5')

  console.log(`version:${version.version}\nmd5:${md5}\ndate:${date.toString()}`)
  // 设置到环境变量中
  process.env.APP_INFO = JSON.stringify(Object.assign({}, version, {date, md5}))
}
