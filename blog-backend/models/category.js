const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    category_name:{
        type:String,
        required:true
    },
},{timestamps:true});


const categories = new mongoose.model("CATEGORY",postSchema);

module.exports=categories;