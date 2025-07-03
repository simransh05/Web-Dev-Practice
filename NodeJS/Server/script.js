const http = require('http');
const port = 4000;
const fs= require('fs');

// function reqHandler(req,res){

// }
// const server = http.createServer(reqHandler);

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html'
    })
    if(req.url=='/') file = './index.html'
    else if(req.url=='/profile') file= './profile.html'
    else file = './signin.html'
    fs.readFile(file,(err,data)=>{
        if(err) return console.log(err.message);
        res.end(data);
    })
    // res.end('<h1>here is the requested data</h1>')
})

server.listen(port,(err)=>{
    if(err){
        return console.log(err.message);
    }console.log(`server start at ${port}`);
});