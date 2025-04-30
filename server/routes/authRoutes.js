const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "Secret_Key"

router.post('/signin',async(req,res)=>{
    const {name,country,email,password} = req.body;
    try{
        const findUser = await User.findOne({email});
        if(findUser) {
            return res.status(400).json({messaage: 'user already exists with this email'})
        }

        const hahsedpassword =await bcrypt.hash(password,10)

        const newUser = new User({name,country,email,password:hahsedpassword});
        await newUser.save();
        return res.status(200).json({message: 'Created User successfully',user:newUser});
    }catch(err) {
        return res.status(500).json({message: `erroe hilw creating user error: ${err}`});
    }
})

router.post('/login',async(req,res) => {
    const {email,password} = req.body;
    try{
        const findUser = await User.findOne({email});
        if(!findUser) {
            return res.status(404).json({message:'User not found'});
        }

        const matchPassword = await bcrypt.compare(password,findUser.password);
        if(!matchPassword) {
            return res.status(403).json({message: 'Invalid Credentials'});
        }
        const token = jwt.sign(
            {id:findUser._id},
            JWT_SECRET,
            {expiresIn:'1h'}
        )
        return res.status(200).json({message: 'User logged in successfull',token})
    }catch(err){
        return res.status(500).json({message:'Error while logging in',error:err});
    }
})

module.exports = router;