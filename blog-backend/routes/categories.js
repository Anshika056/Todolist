const express = require("express");
const router = express.Router();
const Category =require("../models/category");

router.post("/createcat",async (req,res)=>{
    try{
    const cat = new Category(req.body);
    const newcat = await cat.save();
    if(newcat){
        res.status(200).json("new category created");
        console.log(newcat);
    }else{
        res.send("category was not created");
    }
}
    catch(err){
        res.status(400).json(err)
    }
})

router.get("/getcat", async (req, res) => {
    try {
        console.log("plp");
      const cats = await Category.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports=router