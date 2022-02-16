const express = require("express");
const { register, login } = require("../controllers/auth");
const router = express.Router();
const User = require("../models/users");


//registing a user
router.post("/register",register);

//login of the user
router.post("/login",login);

module.exports=router;