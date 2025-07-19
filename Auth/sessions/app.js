const express = require('express');
const app = express();
const session = require('express-session')
const path = require('path')
const mongoStore = require('connect-mongo')
require('dotenv').config();
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store:mongoStore.create({mongoUrl:process.env.MONGO_URL})// store in the db
}))

app.get('/', (req, res) => {
    res.redirect('signup');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // for storing the user in session 
    req.session.username = username;
    req.session.password = password;
    console.log(req.session);
    res.redirect('/login');
})
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (req.session.username === username && req.session.password === password) {
        res.redirect('/profile')
    } else {
        res.redirect('/login')
    }
})

app.get('/profile', (req, res) => {
    if (req.session.username) {
        res.render('profile', {
            username: req.session.username
        })
    } else {
        res.redirect('/login')
    }

})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})

app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});