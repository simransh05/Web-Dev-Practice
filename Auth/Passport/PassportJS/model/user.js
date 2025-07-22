const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  username : String,
  password:String,
  fbId: String,
  fbaccessToken:String,
  googleId:String,
  googleaccessToken:String
});

module.exports = mongoose.model('Users',userSchema)