const express = require('express');
const app = express();
const session = require('express-session')
const path = require('path')
const mongoStore = require('connect-mongo')
const flash = require('connect-flash');
const loginRoute = require('./routes/login')
const signupRoute = require('./routes/signup')
const profileRoute = require('./routes/profile');
const { default: mongoose } = require('mongoose');
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/profile', profileRoute);
require('dotenv').config();
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash());


app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({ mongoUrl: process.env.MONGO_URL })// store in the db
}))

app.get('/', (req, res) => {
    res.redirect('signup');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(4000, () => {
            console.log('Server is running at http://localhost:4000');
        });
    })
    .catch((Err)=>{
        console.log(Err);
    })
