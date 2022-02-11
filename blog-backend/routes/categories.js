const express = require("express");
const { createcat, getcat } = require("../controllers/category");
const router = express.Router();
const Category =require("../models/category");

router.post("/createcat",createcat)

router.get("/getcat", getcat)


module.exports=router