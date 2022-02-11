const Category =require("../models/category");

exports.createcat=async (req,res)=>{
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
}


exports.getcat=async (req, res) => {
    try {
        console.log("plp");
      const cats = await Category.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
}