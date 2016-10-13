var socketio = require('./socketio');

var sioServer = new socketio.sioServer();
sioServer.bootStarp(8888, 'game');