const express = require('express')

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();
const controller = require('../controller/shop/products');

routes.get('/product',controller.getProducts);
routes.get('/details',controller.getDetails);
routes.get('/',controller.getProducts);
routes.post('/submitReview',controller.postSubmitReview);
routes.get('/addtocart',controller.getAddToCart);
routes.get('/cart',controller.getCart);
routes.get('/increseQty',controller.getIncreseQty);
routes.get('/decreaseQty',controller.getDecreseQty);
routes.get('/deletecartitem',controller.getDeleteCartItem);


module.exports = routes;
