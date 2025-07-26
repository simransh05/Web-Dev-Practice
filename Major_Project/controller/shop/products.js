const Products = require("../../model/products");

module.exports.getProducts = async (req, res, next) => {
    try {
        let products = await Products.find({});
        res.render('shop/products', {
            products,
            isAdmin: req.user.isAdmin,
            cartCount: req.user.cart.product.length
        });
    } catch (err) {
        next(err);
    }
}

module.exports.getDetails = async (req, res, next) => {
    const { id } = req.query;
    try {
        let products = await Products.find({ _id: id }).populate('Reviews');
        res.render('shop/productDetails', {
            product: products[0],
            isAdmin: req.user.isAdmin,
            cartCount: req.user.cart.product.length
        });
    } catch (err) {
        next(err);
    }
}

// POST /shop/submitreview
module.exports.postSubmitReview = async (req, res, next) => {
    const { productId, title, description } = req.body;

    try {
        const review = await Reviews.create({ title, description });

        const product = await Products.findOne({ _id: productId });
        product.reviews.unshift(review._id); // add to beginning of array
        await product.save();

        const updatedProduct = await Products.findOne({ _id: productId }).populate('reviews');
        res.send({ reviews: updatedProduct.reviews });
    } catch (err) {
        next(err);
    }
};


module.exports.getAddToCart = (req, res) => {
    const { productId } = req.query;
    req.user.addToCart(productId)
        .then((result) => {
            result('done')
        })
}

module.exports.getCart = (req, res, next) => {
    req.user.populate('cart.product.id')
        .then((result) => {
            console.log(result);
            let products = result.cart.products
            let totalPrice = 0;
            products.forEach(e => {
                totalPrice += (e.id.price * e.quantity)
            });
            res.render('shop/cart', {
                products: result.cart.Products,
                cartCount: req.user.cart.product.length,
                totalPrice
            })
        })
        .catch((err) => {
            next(err);
        })
}

module.exports.getIncreaseQty = async (req, res, next) => {
    const { productId } = req.query;
    let userId = req.user._id
    req.user.populate('cart.product.id')
        .then(async (result) => {
            console.log(result);
            let products = result.cart.products
            products.forEach((e) => {
                if (e.id._id == productId) {
                    e.quantity += 1;
                }
            })
            let totalPrice = 0;
            products.forEach(e => {
                totalPrice += (e.id.price * e.quantity)
            });
            try {
                await req.user.save();
            }
            catch (er) {
                return next(er)
            }
            res.send({
                msg: 'increased quantity',
                totalPrice
            })
        })
        .catch((err) => {
            next(err);
        })
}

module.exports.getDecreaseQty = (req, res, next) => {
    const { productId } = req.query;
    let userId = req.user._id
    req.user.populate('cart.product.id')
        .then(async (result) => {
            console.log(result);
            let products = result.cart.products
            products.forEach((e) => {
                if (e.id._id == productId) {
                    e.quantity -= 1;
                }
            })
            let totalPrice = 0;
            products.forEach(e => {
                totalPrice -= (e.id.price * e.quantity)
            });
            try {
                await req.user.save();
            }
            catch (er) {
                return next(er)
            }
            res.send({
                msg: 'decreased quantity',
                totalPrice
            })
        })
        .catch((err) => {
            next(err);
        })
}

module.exports.getDeleteCartItem = (req,res,next)=>{
    const { productId } = req.query;
    let userId = req.user._id
    req.user.populate('cart.product.id')
        .then(async (result) => {
            console.log(result);
            let products = result.cart.products
            let newProduct = products.filter((e) => {
                if (e.id._id == productId) {
                    return false;
                }return true;
            })
            let totalPrice = 0;
            newProduct.forEach(e => {
                totalPrice -= (e.id.price * e.quantity)
            });
            user.cart.products = newProduct;
            try {
                await req.user.save();
            }
            catch (er) {
                return next(er)
            }
            res.send({
                msg: 'deleted the item successfully ',
                totalPrice
            })
        })
        .catch((err) => {
            next(err);
        })
}