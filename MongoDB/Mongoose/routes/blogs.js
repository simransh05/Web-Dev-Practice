const express = require('express');

const routes = express.Router();
const { getBlog, postBlog, deleteBlog, updateBlog, postUpdate, getDetails, getActor,updateActor, postActor,updateActorForm, getDeleteActor } = require('../controller/blogs')

routes.get('/', getBlog);
routes.get('/blogs', getBlog)
routes.post('/blogs', postBlog);
routes.get('/delete', deleteBlog);
routes.get('/update', updateBlog);
routes.post('/update', postUpdate);
routes.get('/details', getDetails);
routes.get('/actor', getActor);
routes.post('/actor', postActor);
routes.get('/update/actor', updateActorForm);
routes.get('/delete/actor', getDeleteActor);
routes.post('/update/actor',updateActor)

module.exports = routes;
