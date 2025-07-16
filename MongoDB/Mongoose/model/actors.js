const mongoose = require('mongoose');
const { Schema } = mongoose;

const actorSchema = new Schema({
    name: String,
    age: String,
    imageurl: String
});

module.exports = mongoose.model('actors', actorSchema);
