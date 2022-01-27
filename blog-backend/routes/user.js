const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");

//registing a user
router.post("/register", async (req,res)=>{
try{
const{username , email , password } = req.body;
 
const newusers = new User({username,email,password});
const users = await newusers.save();
if(users)
{   
    console.log(users);
    res.send({user:users});
}
else{
    res.send("something is wrong");
}
}catch(err){
console.log(err)
res.status(400).send(err)
}})

//login of the user
router.post("/login",async (req,res)=>{
    try{
        const validuser = await User.findOne({username: req.body.username});   //find the user by its username (usually we do it by email)
        if(!validuser){
            res.send("wrong details entered");
        } 
        const validate = await bcrypt.compare(req.body.password,validuser.password)
        if(!validate){
            res.send("wrong details entered");
        }else{

            // const {password , ...others} = validuser._doc;     ..if you don't want to show your password in response
            // res.send(others)
            res.send({login:validuser});
        }

        
          
     }catch(err){
        console.log(err);
        res.send(err);
    }
})

module.exports=router;