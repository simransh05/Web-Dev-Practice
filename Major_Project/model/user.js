const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  fbId: String,
  fbaccessToken: String,
  googleId: String,
  googleaccessToken: String,
  isAdmin: Boolean,
  cart: {
    products: [
      {
        id: {
          type: Schema.Types.ObjectId,
          required: true,
          ref:'Products'
        },
        quantity: Number
      }
    ]
  }
});

userSchema.method('addToCart', function (productId) {
  let productCart = this.cart.products;
  let idx = -1
  productCart.forEach((e, i) => {
    if (e.id == productId) {
      idx = i;
    }
  })
  if (idx == -1) {
    productCart.unshift({
      id: productId,
      quantity: 1
    })
  } else {
    productCart[idx].quantity += 1;
  }
  return this.save();
})
module.exports = mongoose.model('Users', userSchema)