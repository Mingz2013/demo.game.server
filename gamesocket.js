/**
 * Created by zhaojm on 14/11/24.
 */
exports.GameSocket = function (sioserver, socket){

    this._sioserver = sioserver;
    this._socket = socket;
    console.log('GameSocket->this._socket=', this._socket);

    //this._userdata = from dao or new a model
    //this._gamedata = from dao or new a model

    this.onDisconnect = function(){};
    this.onMessage = function(message, callback){};
    this.onAnything = function(data){};

    this._socket.on('register', this.onRegister);
    this._socket.on('login', this.onLogin);
    this._socket.on('game_ready', this.onGameReady);
    this._socket.on('game_start', this.onGameStart);
    this._socket.on('chess_next', this.onChessNext);
    this._socket.on('game_over', this.onGameOver);

    this.onRegister = function(){};
    this.onLogin = function(){};
    this.onGameReady = function(){};
    this.onGameStart = function(){};
    this.onChessNext = function(){};
    this.onGameOver = function(){};

    this.checkValidChess = function(){};
    this.checkGameOver = function(){};

};