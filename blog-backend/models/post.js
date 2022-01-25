const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String, 
        required: true
    },
    postphoto:{
        type:String,
        required: false
    },
    username:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:true
    }
},{timestamps:true});


const post = new mongoose.model("POST",postSchema);

module.exports=post;