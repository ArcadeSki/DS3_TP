io.on('connection', () => {
    var tutDone = false;
    console.log('AAAAAAAAAAAAAAAAAA');
    socket.emit('join', {complete:tutDone});
    
    socket.on('done', (tutorial) => {
        tutDone = tutorial.fin;
        console.log(tutDone);
    });
});