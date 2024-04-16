const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const io        = require('socket.io')(server);

io.on('connection', () => {
    var tutDone = false;
    console.log('AAAAAAAAAAAAAAAAAA');
    socket.emit('join', {complete:tutDone});
    
    socket.on('done', (tutorial) => {
        tutDone = tutorial.fin;
        console.log('YYYYYYYYYYYYYYYY');
    });
});