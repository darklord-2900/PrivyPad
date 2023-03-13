const express=require('express');
const router= express.Router();
const User= require('../models/User')
const { body, validationResult } = require('express-validator');
router.post('/',[
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }),
    ],async (req,res)=>{
        // if errors are present then bad request is returned
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        // checking whether user with same email exists
        let user=User.findOne({email:req.body.email})
        if(user){
            return req.status(400).json({error: "Sorry this email already exists"})
        }
        user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        })

        // .then(user => res.json(user))
        // .catch(err=>{console.log(err)
        //     res.json({error: "please enter a unique value for email"})})
})
module.exports=router