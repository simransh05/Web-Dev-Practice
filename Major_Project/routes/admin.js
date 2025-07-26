const express = require('express');
const controller = require('../controller/admin/product');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

routes.get('/add-product',controller.getAddProduct);

routes.post('/add-product',controller.postAddProduct);
routes.get('/products',controller.getProducts);
routes.get('/edit',controller.getEditProduct)
routes.post('/edit',controller.postEditProduct)
routes.get('/details',controller.getDetailsProduct)
routes.get('/delete',controller.getDeleteProduct)
routes.get('/deleteReview',controller.getDeleteReview)

module.exports = routes;
