const {Router} = require('express')
const Controller = require('../controller/login');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', Controller.getLogin);
routes.post('/',Controller.postLogin );
module.exports = routes;
