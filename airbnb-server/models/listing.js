const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
       
    },
    images: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    price: {
        type: Number,
       
    },
    location: {
        type: String,
        
    }
   

})

module.exports = mongoose.model("Listing", listingSchema);