let usermap = {}
module.exports = (io, socket) => {
    socket.emit('welcome', {
        msg: 'welcome to my app'
    });
    socket.on('thankYou', (msg, cb) => {
        console.log(msg);
        cb({ status: 200 });
    })
    const chatHandler = require('../handlers/chatHandler');
    chatHandler(io, socket, usermap);
    const disconnectHandler = require('../handlers/disconnectHandler');
    disconnectHandler(io, socket, usermap);
    const userHandler = require('../handlers/userHandler');
    userHandler(io, socket, usermap);
}