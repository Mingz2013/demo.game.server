/**
 * Created by zhaojm on 14/11/19.
 */
exports.sioServer = function(){
    var io = null;
    this._server = null;

    this.gameSocketList = [];

    this.bootStarp = function(port, namespace){
        io = io || require('socket.io').listen(port);
        //console.log(io);
        this._server = io.of('/' + namespace);
        this._server.on('connection', onConnection);
        console.log('the server has boot now!');
    };

    var onConnection = function(socket){

        console.log('a user connected');
        var gameSocket = require('./gamesocket').GameSocket(this, socket);
        this.gameSocketList.append(gameSocket);

        socket.on('disconnect', function(){
            this.gameSocketList.remove(gameSocket);
            gameSocket.onDisconnect();
        });

        socket.on('message', function(message, callback){
            console.log('from client: ' + message);
            gameSocket.onMessage(message, callback);
        });

        socket.on('anything', function(data){
            console.log('anything, data:', data);
            gameSocket.onAnything(data);
        });
    };



    //this.emit = function(action, data, func){
    //    console.log('frame.SocketIOClient->emit, data=', data);
    //    if(this.server != null) {
    //        this.server.emit(action, data, func);
    //    }else{
    //        console.log('frame.SocketIOClient->send, this._sioClient is null');
    //    }
    //};
    //this.send = function(data){
    //    //frame.log.trace('frame.SocketIOClient->send, data=', data);
    //    if (this.server != null) {
    //        this.server.send(data);
    //    }else{
    //        //frame.log.error('frame.SocketIOClient->send, this._sioClient is null');
    //    }
    //};
    //
    //this.on = function(action, func){
    //    //frame.log.trace('frame.SocketIOClient->on, action=', action);
    //    if(this.server != null) {
    //        this.server.on(action, func);
    //    }else{
    //        //frame.log.warn('frame.SocketIOClient->send, this._sioClient is null');
    //    }
    //},







};




//var express = require('express')
//    , app = express()
//    , http = require('http')
//    , server = http.Server(app)
//    , io = require('socket.io').listen(server)


//app.get('/', function(req, res){
//    res.sendFile(__dirname + '/index.html');
//    //res.sendFile(__dirname + '/../cocosproj/index.html')
////});
//io = require('socket.io').listen(3000)
//var chat = io
//    .of('/chat')// 命名空间，要用http://localhost:3000/chat 链接
//    .on('connection', function(socket){
//
//        console.log('a user connected');
//
//        socket.on('disconnect', function(){
//            console.log('user disconnected');
//        });
//
//        socket.on('message', function(message, callback){
//            console.log('from client: ' + message);
//            //socket.emit('message', data); // 发送给这个socket client
//            //socket.broadcast.emit('message', data);// 发送给其他所有用户，不包括自己
//            //chat.emit('message', data);   // 广播给所有链接socket，包括他自己
//
//            chat.send(message);
//
//        });
//
//        socket.on('anything', function(data){
//            console.log('anything, data:', data);
//            chat.emit('in anything', data);
//        });
//    });
//
//var news = io
//    .of('/news')    // 一个io，新建两个命名空间
//    .on('connection', function (socket) {
//        socket.emit('item', { news: 'item' });
//    });

//
//server.listen(3000, function(){
//    console.log('listening on localhost:3000');
//});