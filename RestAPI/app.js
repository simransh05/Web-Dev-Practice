const express = require('express');
const path = require('path');
const app = express();
const methodOverride= require('method-override')

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ urlencoded: true }));

let students =[
    {name:'abc',id:1},
    {name:'xyz',id:2},
    {name:'mno',id:3},
    {name:'def',id:4}
]

app.get('/students',(req,res)=>{
    res.send(students);
})

app.get('/students/:id',(req,res)=>{
    const {id} = req.params;
    let s = students.filter(s=>s.id==id);
    if(s.length==0){
        res.status(400).send('student not found')
    }
    res.status(200).send(s);
})

app.put('/students/:id',(req,res)=>{
    const {id}= req.params;
    const {name} = req.body;
    students = students.map((s)=>{
        if(s.id==id){
            return {name,id:s.id};
        }else {
            return s;
        }
    })
    res.status(200).send(students);
})

app.delete('/students/:id',(req,res)=>{
    const {id}= req.params;
    students = students.filter((s)=>{
        if(s.id==id){
            return  false;
        }else{
            return true;
        }
    })
    res.status(200).send(students);
})

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
});