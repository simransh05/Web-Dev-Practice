const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description :{
        type:[String],
        required:true
    },
    imageUrl :{
        type:String,
        required:true
    },
    User_id :[{ type: Schema.Types.ObjectId, ref: 'User' }],
    reviews: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }]
    }
});

module.exports = mongoose.model('Products', productSchema)