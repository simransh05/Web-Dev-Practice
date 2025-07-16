const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Blogs = require('./model/blogs');
const hbs = require('hbs');
require('dotenv').config();
hbs.registerPartials(path.join(__dirname,'views/partials'));
app.use(express.static(path.join(__dirname,'styles')));
app.set('view engine','hbs');

app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/blogs');
app.use('/',routes);


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(4000, () => {
        console.log(`Server is running on http://localhost:4000`);
    });
}).catch((error) => {   
    console.error( error);
})
