const path = require('path')
const serve = require('serve')

function start_server(port) {
  const server = serve(path.join(__dirname, 'public'), {
    port: process.env.PORT || port,
    extensions: ['html', 'htm']
  })
}

if (process.mainModule === module) {
  start_server(3000)
}

module.exports = start_server