const Strategy = require('passport-twitter').Strategy;
require('dotenv').config()
module.exports = (passport) => {
    passport.use(new Strategy({
        consumerKey: process.env.API_KEY,
        consumerSecret: process.env.API_SECRET_KEY,
        callbackURL: 'http://localhost:3600/twitter/return'
    }, async(token, tokenSecret, profile, callback)=> {
        return callback(null, profile);
    }));

    passport.serializeUser(function (user, callback) {
        callback(null, user);
    })

    passport.deserializeUser(function (obj, callback) {
        callback(null, obj);
    })

}
