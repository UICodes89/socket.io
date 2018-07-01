const express = require("express");
const socket = require("socket.io");

var app = express();


var server = app.listen(4000, function(req, res){
    console.log("Server is runinig on port 4000");
});


var io = socket(server);


io.on("connection", (socket) => {
    socket.on("chat", function(data){
        io.sockets.emit('chat', data);
    });    
});


app.use(express.static('public'))

