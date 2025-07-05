const express = require('express');
const route = express.Router();
const { v4: uuidv4 } = require('uuid');

let todo=[];

route.get('/gettodo',(req,res)=>{
    res.send(todo);
})

route.post('/addtodo',(req,res)=>{
    const {name} = req.body;
    todo.push({
        id: uuidv4(),
        name
    })
    res.redirect('/gettodo')
})

route.post('/deletetodo',(req,res)=>{
    const {id} = req.body;
    todo = todo.filter(task=>{
        if(task.id==id){
            return false;
        }return true;
    });
    res.redirect('/gettodo')
})

route.get('/increase',(req,res)=>{
    const {id} = req.query;
    console.log(id);
    let idx ;
    todo.forEach((e,i)=>{
        if(e.id==id){
            idx = i;
        }
    })
    let temp = todo[idx];
    todo[idx]= todo[idx-1];
    todo[idx-1] = temp;
    res.redirect('/gettodo')
})

route.get('/decrease',(req,res)=>{
    const {id} = req.query;
    console.log(id);
    let idx ;
    todo.forEach((e,i)=>{
        if(e.id==id){
            idx = i;
        }
    })
    let temp = todo[idx];
    todo[idx]= todo[idx+1];
    todo[idx+1] = temp;
    res.redirect('/gettodo')
})

module.exports = route;