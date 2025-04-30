const express = require('express');
const router = express.Router();
const User = require('../models/user');






// get all users
router.get("/", async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(400).json({error: err.message})
    }
})

// get user by id
router.get("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const user =await User.findById(id);
        res.json(user);
        if(!user){
            return res.status(404).json({error: "user not found"})
        }
        
    }catch(err){
    console.log(err);
    res.status(400).json({error: err.message})

    }

})

// update user by id
router.put("/:id",async(req,res)=>{
    try{
        const {name, username , email, password} = req.body;
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id,{name,username,email,password},{new:true})
        res.json(updatedUser);
    }catch(err){
        console.log(err);
        res.status(400).json({error: err.message})
    }
})

// delete user by id
router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);

    }catch(err){
        console.log(err);
        res.status(400).json({error:err.message})
        
    }
})

module.exports = router;
