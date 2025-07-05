const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const teacherFile = require('./routes/teacher')
const studentFile = require('./routes/student')

app.use(express.urlencoded({extended:true}));

app.use('/teacher',teacherFile);
app.use('/student',studentFile);

app.listen(port,(err)=>{
    console.log(`server is running on http://localhost:`+port)
})