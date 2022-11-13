const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../modal/authSchema')
require('../controller/authController')(passport)


router.get('/twitter/login', passport.authenticate('twitter'))
router.get('/twitter/return', passport.authenticate('twitter', {
    failureRedirect: '/'
}), async (params) => {
    const { req, res } = params
    const { id, username, displayName, photos, } = params.user
    const existUser = await User.findOne({ id })
    if (existUser) {
        res.send({
            'Message': "user already exist"
        })
    } else {
        const newUser = new User({
            twitterId: id,
            userName: username,
            displayName,
            profilePhoto: photos[0].value
        }).save()
        newUser.then(userdata => {
            res.status(200).send(userdata)
        }).catch(err => console.log(err))
    }

})
module.exports = router