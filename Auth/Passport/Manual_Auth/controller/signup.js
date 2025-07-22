const User = require("../model/user");
const bcrypt = require('bcrypt');
const saltRounds=2;

module.exports.getSignup = (req, res) => {
    res.render('signup');
};
module.exports.postSignup = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username })
        if (!user) {
            try {
                bcrypt.hash(password, saltRounds, async function (err, hash) {
                    user = await User.create({ username, password:hash })
                    // Store hash in your password DB.
                });

                req.session.username = username;
                // req.session.password = password;
                req.flash('msg', 'sucessfully signup')
                return res.redirect('/login');
            } catch {
                req.flash('msg', 'unsuccessful')
                return res.redirect('/signup');
            }

        } else {
            req.flash('msg', 'User already exist')
            return res.redirect('/login');
        }
    }
    catch (err) {
        next(err);
    }

};