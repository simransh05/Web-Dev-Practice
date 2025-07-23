module.exports = (io,socket,usermap) =>{
    socket.on('disconnect', () => {
        let socketId= socket.id
        let username = usermap[socket.id];
        if (username) {
            delete usermap[socketId]
            let activeUser =[]
            for(let i in usermap){
                activeUser.push(usermap[i]);
            }
            socket.broadcast.emit('disconnectUser', {
                username,
                activeUser
            })
        }
    })
}