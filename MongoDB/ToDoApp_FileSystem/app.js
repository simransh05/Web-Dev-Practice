const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const routes = require('./routes/todo')

app.use(express.json()); // otherwise axios req can not be read 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/',routes);


app.listen(port,(err)=>{
    console.log('server is running on http://localhost:'+port);
})