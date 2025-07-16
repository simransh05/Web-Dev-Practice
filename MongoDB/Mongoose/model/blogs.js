// 1 schema

const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    actor: {type:Schema.Types.ObjectId,ref:'actors'}, // ref is the file name and in populate the key i.e. actor:
    description: String
});

module.exports = mongoose.model('Blogs', blogSchema);

// 2 associate schema with model