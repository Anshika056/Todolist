const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Post = require("../models/post");
const bcrypt = require("bcrypt");


//updating a user
router.put("/update/:id",async (req,res)=>{
    if(req.body.userId == req.params.id){                      //it will check if the id send in body matchs the id sent in the parameters
        if(req.body.password){                                      //if the user wants to update its password then it will hash before saving
        //   const salt = await bcrypt.genSalt(10);
        //  req.body.password = await bcrypt.hash(req.body.password, parseInt(salt));
         req.body.password  = await bcrypt.hash( req.body.password ,12);
        } 
    try{
    const updateduser = await User.findByIdAndUpdate(req.params.id,{$set:req.body,}, { new: true });
    if(updateduser){
      //  console.log("op");
       res.status(200).json(updateduser);
       console.log(updateduser);
   }
    }  catch(err){
        res.status(400).json(err);
    }  
 }
    else{
        res.status(400).json("you can only update your account");
    }
})



//delete the users
router.delete("/delete/:id",async (req,res)=>{
    if(req.body.userId === req.params.id){
       // console.log("poiy");
        try{
            const user = await User.findById(req.params.id);             //find the users so that we delete its posts too
            try{
                await Post.deleteMany({ username: user.username})         //delete the post created by the user found by user id
                const deleted  = await User.findByIdAndDelete(req.params.id);
                if(deleted){
                    console(deleted);
                    res.status(200).json("account has been deleted");
                }else{
                    res.status(400).json("not deleted");
                }
             }catch(err){
                 console.log(err);
        }
    }    catch(err){
           console.log(err);
       }
    }else{
        res.status(400).json("you can delete only you account!");
    }
})

  

//get the users
router.get("/getuser/:id",async (req,res)=>{
try{
 const data = await User.findById(req.params.id)
 res.status(200).json(data);

}catch(err){
    res.status(400).send(err)
    console.log(err);
}

})



module.exports=router;