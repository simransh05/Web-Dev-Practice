const {Router} = require('express')
const controller = require('../controller/signup')
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', controller.getSignup);

routes.post('/', controller.postSignup );

module.exports = routes;
