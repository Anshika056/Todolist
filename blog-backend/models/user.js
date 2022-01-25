const mongoose = require("mongoose");
const validator=require("validator")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        min:4,
        max:15,
        lowercase:true
    },
    email:{
        type:String, 
        required: true,
        trim: true,
        unique: true,
        validate: (value) => {                             //validation the password
            if (!validator.isEmail(value)) {
              throw new Error("Invalid Email Address");
            }
          },
    },
    password:{
        type:String,
        required: true
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true});


const User = new mongoose.model("USER",userSchema);

module.exports=User;