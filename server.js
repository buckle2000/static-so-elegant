const os = require('os')
const path = require('path')
const http = require('http');
const ecstatic = require('ecstatic');

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
  print_information(port)
  callback()
  http.createServer(ecstatic({
    root: path.join(__dirname, 'public'),
    showDir: true,
    autoIndex: true,
  })).listen(port)
}

module.exports = run_server

if (require.main === module) {
  const port = process.env.PORT || 3000
  print_information(port)
  http.createServer(ecstatic({
    root: path.join(__dirname, 'public'),
    showDir: true,
    autoIndex: true,
  })).listen(port);
}