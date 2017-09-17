const run_server = require('./server')

module.exports = (config, callback) => {
  return run_server(config.port, callback)
};