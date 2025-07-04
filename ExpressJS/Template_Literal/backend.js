const express = require("express");
const app = express();
const path = require('path');

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/hbsFile',(req,res)=>{
    res.render('index.hbs',{
        title:'My Page'
    });
})

app.listen(4000,(err)=>{
    console.log('server is running on http://localhost:4000');
})