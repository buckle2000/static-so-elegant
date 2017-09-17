const server = require('./server');

module.exports = (config, callback) => {
  server(config.port);
  callback();
  return {
    close() {
      server.stop()
    }
  };
};