const User = require("../model/user");
const bcrypt = require('bcrypt');
const saltRounds = 2;

module.exports.getSignup = (req, res) => {
  res.render('signup');
};

module.exports.postSignup = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      req.flash('msg', 'User already exists');
      return res.redirect('/login');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      password: hashedPassword
    });

    req.session.username = newUser.username;
    req.flash('msg', 'Successfully signed up');
    return res.redirect('/login');

  } catch (err) {
    console.error(err);
    req.flash('msg', 'Signup failed');
    return res.redirect('/signup');
  }
};
