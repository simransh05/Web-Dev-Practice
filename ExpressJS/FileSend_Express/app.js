const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

// better way to render instead of get 
app.use('/file',express.static(path.join(__dirname,"public")));


// need to send the absolute path so __dirname will give the path till fileSend then next inside it index

// app.get('/file',(req,res)=>{
//     res.sendFile(__dirname +'/index.html');
// })

// another way for path 

// app.get('/file',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// })

// can handle the req urls file as well
app.get('/server.js',(req,res)=>{
    res.send('here is the requested js file')
})
app.listen(port,(err)=>{
    console.log(`server is running on http://localhost:${port}`);
})
