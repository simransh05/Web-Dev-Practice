const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({urlencoded:true}));
app.use(express.static(path.join(__dirname,'public')))

app.listen(4000,(err)=>{
    console.log('server is running at http://localhost:4000');
})