const { Router } = require('express')
const Controller = require('../controller/login');
const myPassport = require('../Authentication/passport')

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', Controller.getLogin);
routes.post('/',
    myPassport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    }
);// login locally


// facebook auth 
// routes.get('/facebook',
//     myPassport.authenticate('facebook', { failureRedirect: '/login', successRedirect: '/' })
// )

// routes.get('/auth/facebook/callback',
//     myPassport.authenticate('facebook', { failureRedirect: '/login', successRedirect: '/profile' })
// )
// google auth
// routes.get('/google',
//     myPassport.authenticate('google', { scope: ['profile'] }),
//     function (req, res) {
//         res.redirect('/profile');
//     }
// )

module.exports = routes;
