const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');
// const verifyToken = require('../middlewares/authMiddleware');


// create new listing
router.post("/" ,async(req,res)=>{
    try{
        const listing = new Listing(req.body);
        await listing.save();
        res.status(201).json({
            message:"Listing created successfully",
            listing
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Server error",
            error:err.message
        })
    }
    
});



// get all listings
router.get("/", async(req,res)=>{
    try{
        const listings = await Listing.find();
        res.status(200).json({
            message:"Listings fetched successfully",
            listings
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Server error",
            error:err.message
        })
    }
});


// get listing by id
router.get("/:id", async(req,res)=>{
    try{
        const listing = await Listing.findById(req.params.id);
        if(!listing){
            return res.status(404).json({
                message:"Listing not found"
            })
        }
        res.status(200).json({
            message:"Listing fetched successfully",
            listing
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Server error",
            error:err.message
        })
    }
});


// update listing by id
router.put("/:id", async(req,res)=>{
    try{
        const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!listing){
            return res.status(404).json({
                message:"Listing not found"
            })
        } }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Server error",
            error:err.message
        })
    }})
    

// delete listing by id
router.delete("/:id", async (req, res) => {
    try {
      await Listing.findByIdAndDelete(req.params.id);
      res.json({ message: "Listing deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;