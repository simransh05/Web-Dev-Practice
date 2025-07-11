const express = require('express');
const route = express.Router();
const todocontroller = require('../controller/todocontroller')


route.get('/gettodo',todocontroller.getGettodos)

route.post('/addtodo',todocontroller.postAddtodos)

route.post('/deletetodo',todocontroller.postDeletetodos)

route.get('/increase',todocontroller.getIncrease)

route.get('/decrease',todocontroller.getDecrease)

module.exports = route;