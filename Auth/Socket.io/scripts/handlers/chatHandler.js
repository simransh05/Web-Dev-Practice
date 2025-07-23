module.exports = (io,socket,usermap) =>{
    socket.on('chat', (msg, cb) => {
        console.log(msg);
        cb({ status: 'chat receive success' });
        // socket.broadast.emit('msg', { // to others 
        //     text: msg, 
        //     senderName : usermap[socket.id]
        // })
        io.emit('msg', { // send to all  the users present include self
            text: msg,
            senderName: usermap[socket.id]
        })
    })
}