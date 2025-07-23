module.exports = (io,socket,usermap) =>{
    socket.on('saveUser', ({ username }) => {
        console.log(username, socket.id)
        usermap[socket.id] = username;
        let activeUser =[]
            for(let i in usermap){
                activeUser.push(usermap[i]);
            }
        io.emit('joinedChat',{
            username,
            activeUser
        })
    })
}