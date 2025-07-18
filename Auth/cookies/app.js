const express = require('express');
const app = express();
const cookie = require('cookie');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    var cookies = cookie.parse(req.headers.cookie || "");
    if (cookies.login) {
        res.redirect('/profile');
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    var cookies = cookie.parse(req.headers.cookie || "");
    if (cookies.login) {
        res.redirect('/profile');
    }
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("login", Boolean(true), {
            httpOnly: true,
            maxAge: 10,
        }),
    );
    res.send('you are log in ')
})

app.get('/profile', (req, res) => {
    var cookies = cookie.parse(req.headers.cookie || "");
    if (cookies.login) {
        return res.send('welcome to application');
    } else {
        res.redirect('/login');
    }
})

app.get('random', (req, res) => {
    var cookies = cookie.parse(req.headers.cookie || "");
    const islogin = (cookies.login === 'true')
    if (islogin) {
        return res.send('your login value is true');
    } else {
        return res.send('your login value is false');
    }

})

app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});