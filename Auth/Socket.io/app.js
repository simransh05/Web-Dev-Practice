const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require('path');
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

const onConnection = (socket) => {// for pipeline 
    require('./scripts/chatApp/chat')(io,socket)
}
io.on("connection", onConnection );

app.get('/chat', (req, res) => {
    res.render('chat');
})



httpServer.listen(4000, () => {
    console.log('server is running on http://localhost:4000');
});
