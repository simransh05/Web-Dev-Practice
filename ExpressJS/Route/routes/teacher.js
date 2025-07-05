const express = require('express');
const route = express.Router();

let teachers =[
    'kartik',
    'gaurav',
    'monu',
    'shubham'
]

route.get('/',(req,res)=>{
    res.send(teachers);
})

route.post('/add',(req,res)=>{
    const {name} = req.body;
    teachers.push(name);
    res.redirect('/teacher');
})

module.exports = route;