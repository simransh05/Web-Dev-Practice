const express = require('express');
const route = express.Router();

let students =[
    'kartik sir',
    'gaurav sir',
    'monu sir',
    'shubham sir'
]

route.get('/',(req,res)=>{
    res.send(students);
})

module.exports = route;