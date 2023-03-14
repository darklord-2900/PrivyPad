const express=require('express');
const router= express.Router();
const User= require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_secret="harryisagoodB$oy";

// create user using: POST "/api/auth/createuser" 
router.post('/createuser',[
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
        try{
            let user=await User.findOne({email:req.body.email})
            console.log(user);
            if(user){
                return req.status(400).json({error: "Sorry this email already exists"});
            }
            const salt=await bcrypt.genSalt();
            let secpass= await bcrypt.hash(req.body.password,salt);
            //create a new user
            user=await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass ,
        })
        const data={
            user:{
                id: user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_secret);
        console.log(authtoken);
        res.json({authtoken})    
            // .then(user => res.json(user))
            // .catch(err=>{console.log(err)
            //     res.json({error: "please enter a unique value for email"})})
        }
        catch(error){
            console.error(error.message)
            res.status(500).send("some error occoured");
        }
    })
module.exports=router