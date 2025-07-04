const express = require('express');  // require is important 
const app = express() // creating instance 
const Port=4000;

app.get('/',(req,res)=>{
    res.send('Hello World')
})

// params-

// app.get('/greet/:user',(req,res)=>{
//     console.log(req.params);
//     res.send(`Hello! ${req.params.user}`);
// })

// query 
app.get('/greet',(req,res)=>{
    res.send(`Hello! ${req.query.name}, Good ${req.query.val}`);
})


app.listen(Port,(err)=>{
    console.log(`server running on http://localhost:${Port}`);
})