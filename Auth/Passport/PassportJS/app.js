const express = require('express');
const app = express();
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose');
const session = require('express-session');
const flash =require('connect-flash');
const path = require('path')
const passport = require('./Authentication/passport')
require('dotenv').config();
app.set('view engine','hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl : process.env.MONGO_URL
    })
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); 

app.use('/login',require('./routes/login'))
app.use('/signup',require('./routes/signup'))
app.use('/profile',require('./routes/profile'))
app.get('/', (req, res) => {
    res.redirect('/login');
});
app.get('/login/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    }
)
app.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(4000, () => {
            console.log('Server is running at http://localhost:4000');
        });
    })
