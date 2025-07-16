const Blogs = require('../model/blogs');
const Actor = require('../model/actors');

// Get all blogs and actors
module.exports.getBlog = async (req, res) => {
  const blogs = await Blogs.find().populate('actor'); 
  const actors = await Actor.find();
  res.render('blogs', { blogs, actor: actors });
};


// Create a new blog
module.exports.postBlog = async (req, res) => {
  const { title, actor, description } = req.body;
  await Blogs.create({ title, actor, description });
  res.redirect('/blogs');
};

// Delete a blog
module.exports.deleteBlog = async (req, res) => {
  const { id } = req.query;
  await Blogs.findByIdAndDelete(id);
  res.redirect('/blogs');
};

// Update blog form
module.exports.updateBlog = async (req, res) => {
  const { id } = req.query;
  const blog = await Blogs.findById(id).populate('actor');
  console.log(blog);
  res.render('updateBlog', { blog });
};

// Submit updated blog
module.exports.postUpdate = async (req, res) => {
  const { title, actor, description, id } = req.body;
  await Blogs.findByIdAndUpdate(id, { title, actor, description });
  Blogs.save();
  res.redirect('/blogs');
};

// Get blog details
module.exports.getDetails = async (req, res) => {
  const { id } = req.query;
  const blog = await Blogs.findById(id).populate('actor');
  res.render('details', { blog });
};

// Show all actors
module.exports.getActor = async (req, res) => {
  const actors = await Actor.find();
  res.render('actor', { actors });
};

// Add new actor
module.exports.postActor = async (req, res) => {
  const { actorurl, name, age } = req.body;
  await Actor.create({ imageurl: actorurl, name, age });
  res.redirect('/actor');
};

// Delete actor
module.exports.getDeleteActor = async (req, res) => {
  const { id } = req.query;
  await Actor.findByIdAndDelete(id);
  res.redirect('/actor');
};

module.exports.updateActorForm = async (req, res) => {
  const { id } = req.query;
  const actor = await Actor.findById(id);
  res.render('updateActor', { actor });
};

module.exports.updateActor = async (req, res) => {
  const { id, name, age, actorurl } = req.body;
  await Actor.findByIdAndUpdate(id, {
    name,
    age,
    imageurl: actorurl   
  });
  res.redirect('/actor');
};

