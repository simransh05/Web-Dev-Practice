const express = require("express");
const app = express();
const path = require('path');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
let taskList =[] // present in the ram (local memory )


app.get('/',(req,res)=>{
    res.render('index',{
        taskList
    })
})
app.post('/addtask',(req,res)=>{
    taskList.push(req.body.task);
    res.redirect('/');
})

app.listen(4000,(err)=>{
    console.log('server is running on http://localhost:4000');
})