const express = require('express');
const app = express();
const port = 4000;


function m1 (req,res,next){
    console.log('pre running m1'); // 1
    if(req.query.x==1){
        return res.send('hello world') 
    }
    next()
    console.log('post running m1') // 9
}

function m2 (req,res,next){
    console.log('pre running m2');// 2
    next()
    console.log('post running m2') // 8

}

function m3 (req,res,next){
    console.log('pre running m3');// 3
    next()
    console.log('post running m3') // 7 (run the code after next)
}

// app.use(m1);
// app.use(m2);
// app.use(m3);

app.get('/',m1,m2,m3,(req,res)=>{
    console.log('pre running midlleware')// 4
    res.send('learning middleware') // 5 then call stack go back if all tasks are done 
    console.log('post running middleware') // 6
})

app.listen(port,(err)=>{
    console.log(`server is running on http://localhost:${port}`);
})