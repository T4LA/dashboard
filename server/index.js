var server = require('./server.js');
var config = require('config');
server.startServer(config.get("serverPort"));
