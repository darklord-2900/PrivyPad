const express=require('express');
const router= express.Router();
const User= require('../models/User')
router.post('/',(req,res)=>{
    // res.json(req.body)
    console.log(req.body)
    res.send(req.body);
    const user= User(req.body);
    user.save();
})
module.exports=router