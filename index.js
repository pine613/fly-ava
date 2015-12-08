const execFile = require('child_process').execFile
const ava = require.resolve('ava/cli.js')

module.exports = function () {
  this.ava = function (opts) {
    return this.unwrap(files => {
      return new Promise((resolve, reject) => {
        const args = files.concat('--color')
        args.unshift(ava)

        execFile(process.execPath, args, (err, stdout, stderr) => {
          if (err) { return reject(stderr) }

          console.log(stderr)
          resolve()
        })
      })
    })
  }
}
