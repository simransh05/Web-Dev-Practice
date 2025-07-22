const Users = require("../model/user");
const bcrypt = require('bcrypt');
module.exports.getLogin = (req, res) => {
    const { username, password } = req.body;
    if (username === req.session.username) {
        return res.redirect('/profile');
    }
    res.render('login', { msg: req.flash('msg') });
}

module.exports.postLogin = async (req, res, next) => {
    const { username, password } = req.body;
    if (username === req.session.username && password === req.session.password) {
        return res.redirect('/profile');
    }
    try {
        const user = await Users.findOne({ username });
        if (!user) {
            req.flash('msg', 'username is incorrect');
            return res.redirect('/login')
        } bcrypt.compare(password, user.password, function (err, result) {
            if (!result) {
                req.flash('msg', 'password is incorrect');
                return res.redirect('/login')
            }else {
                req.session.username = username;
        // req.session.password=password;
        return res.redirect('/profile')
            }
        });

        
    }
    catch (err) {
        next(err);
    }
}