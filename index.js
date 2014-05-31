var src = require('vinyl-github-src')

module.exports.src = src
module.exports.dest = function () {
  throw new Error('not implemented')
}