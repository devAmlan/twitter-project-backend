const express = require('express')
const router = express.Router()
router.get('/followerslist',(req,res)=>{
    res.status(200).json({
        message:"Link created"
    })
})
module.exports = router