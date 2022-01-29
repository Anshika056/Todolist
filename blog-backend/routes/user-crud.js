const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Post = require("../models/post");
const { updateuser, deleteuser, getuser } = require("../controllers/user-crud");


//updating a user
router.put("/update/:id",updateuser)


//delete the users
router.delete("/delete/:id",deleteuser)
  

//get the users
router.get("/getuser/:id",getuser)



module.exports=router;