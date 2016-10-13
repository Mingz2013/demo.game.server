var socketio = require('./socketio');
exports.App = function () {
    return {
        run: function () {
            var sioServer = new socketio.sioServer();
            sioServer.bootStarp(8888, 'game');
        }
    }
};

