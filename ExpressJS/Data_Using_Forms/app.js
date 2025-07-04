const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get('/greet',(req,res)=>{
    res.send(`Hello! Good Morning ${req.query.name}`);
})

app.post('/greet',(req,res)=>{
    res.send(`Hello! Good Morning ${req.body.name}`);
})
app.listen(port,(err)=>{
    console.log(`server is running on http://localhost:${port}`);
})