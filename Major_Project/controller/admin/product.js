const products = require("../../model/products");
const Products = require("../../model/products");

module.exports.getAddProduct = (req, res) => {
    res.render('admin/addProduct', { isAdmin: true });
}

module.exports.postAddProduct = async (req, res, next) => {
    const { name, price, imageUrl, description } = req.body;
    try {
        await Products.create({
            name,
            price,
            imageUrl,
            description,
            User_id: req.user._id
        })
        res.redirect('/admin/products');
    } catch (err) {
        next(err);
    }
}

module.exports.getProducts = async (req, res, next) => {
    try {
        let products = await Products.find({
            User_id: req.user._id
        });
        res.render('admin/products', {
            products, isAdmin: true,
            cartCount: req.user.cart.product.length
        });
    } catch (err) {
        next(err);
    }
}

module.exports.getEditProduct = async (req, res, next) => {
    const { id } = req.query;
    try {
        let products = await Products.find({
            _id: id
        });
        res.render('admin/editProduct', {
            products: products[0],
            isAdmin: true,
            cartCount: req.user.cart.product.length
        });
    } catch (err) {
        next(err);
    }
}

module.exports.postEditProduct = async (req, res, next) => {
    const { name, price, imageUrl, description, id } = req.body;
    try {
        let products = await Products.find({
            _id: id
        });
        products = products[0];
        products.name = name,
            products.price = price,
            products.imageUrl = imageUrl,
            products.description = description
        await products.save();
        res.render('admin/products', {
            products: products[0],
            isAdmin: true,
            cartCount: req.user.cart.product.length
        });
    } catch (err) {
        next(err);
    }
}
module.exports.getDetailsProduct = () => { }

module.exports.getDeleteProduct = async (req, res, next) => {
    const { id } = req.query;
    try {
        await Products.deleteOne({
            _id: id
        });
        res.redirect('/admin/products', {
            isAdmin,
            cartCount: req.user.cart.product.length
        });
    } catch (err) {
        next(err);
    }
}

module.exports.getDeleteReview = async (req, res, next) => {
    const { id, productId } = req.query;
    try {
        let product = await Products.findOne({
            _id: productId
        }).populate('Reviews');
        product.reviews.pull({ _id: id })
        await product.save();
        res.render('shop/productDetails', {
            product,
            isAdmin: req.user.isAdminisAdmin,
            cartCount: req.user.cart.product.length
        });
    } catch (err) {
        next(err);
    }
}