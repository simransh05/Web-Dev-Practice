const {Router} = require('express')
const controller = require('../controller/profile')
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes

routes.get('/', controller.getProfile);


module.exports = routes;
