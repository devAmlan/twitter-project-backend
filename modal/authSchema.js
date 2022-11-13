const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    twitterId:{require:true,type:String},
    userName:{require:true,type:String},
    displayName:{require:true,type:String},
    profilePhoto:{require:true,type:String}
})

const User = mongoose.model('twiiter-users',authSchema)
module.exports = User