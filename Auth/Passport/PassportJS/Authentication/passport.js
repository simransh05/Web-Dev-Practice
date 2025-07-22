const passport = require('passport');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../model/user');
require('dotenv').config();

// local strategy
passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            let user = await User.findOne({ username: username })
            if (!user) { return done(null, false); }
            return done(null, user);
        }
        catch (err) {
            return done(err);
        }
    })
);

// facebook strategy
// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,// string number
//     clientSecret: FACEBOOK_APP_SECRET, //string hashedid
//     callbackURL: "http://localhost:4000/login/auth/facebook/callback"
// },
//     async function (accessToken, refreshToken, profile, cb) {
//         try {
//             let user = await User.findOne({
//                 fbId:profile.id
//             })
//             if(user){
//                 return cb(null,user);
//             }
//              user = await User.Create({
//                 fbaccessToken: accessToken,
//                 fbId:profile.id,
//                 username:profile.displayName
//             })
//             return cb(null, user);
//         }
//         catch (err) {
//             cb(err, false);
//         }
//     }
// ));

// google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,// auth consent in google 
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:process.env.REDIRECT_URI
  },
  async function (accessToken, refreshToken, profile, cb) {
        try {
            let user = await User.findOne({
                googleId:profile.id
            })
            if(user){
                return cb(null,user);
            }
             user = await User.Create({
                googleaccessToken: accessToken,
                googleId:profile.id,
                username:profile.displayName
            })
            return cb(null, user);
        }
        catch (err) {
            cb(err, false);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await User.findById(id)
        done(null, user);
    }
    catch (err) {
        done(err);
    }
});



module.exports = passport;