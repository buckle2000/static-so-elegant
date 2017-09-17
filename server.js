const os = require('os')
const path = require('path')
const httpserver = require('http-server')

const ifaces = os.networkInterfaces()

function print_information(port) {
  console.group()
  console.log()
  for (let info of Object.values(ifaces)) {
    for (let { address, internal }
      of info) {
      console.log(`http://${address}:${port}/  ${internal?'internal':''}`)
    }
  }
  console.log()
  console.groupEnd()
}

function run_server(port, callback) {
  const server = httpserver.createServer()
  server.listen(port, (...args) => {
    print_information(port)
    if (callback)
      callback(...args)
  })
  return server
}

module.exports = run_server

if (require.main === module) {
  const server = httpserver.createServer({
    root: path.join(__dirname, 'public')
  })
  const port = process.env.PORT || 3000
  server.listen(port, () => {
    print_information(port)
  })
}