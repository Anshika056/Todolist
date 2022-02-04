const express = require("express");
const { createpost, updatepost, deletepost, getpost } = require("../controllers/post");
const router = express.Router();

//create a post
router.post("/createpost",createpost)

//update the post 
router.put("/updatepost/:id",updatepost)

//delete post
router.delete("/deletepost/:id",deletepost)

//GET POST
router.get("/getpost/:id",getpost)


  //upload the post 
//   const storage = multer.diskStorage({           //storage for the images
//     destination: (req, file, cb) => {            // where should be stored
//       cb(null, "images");
//     },
//     filename: (req, file, cb) => {                        
//       cb(null, file.filename +Date.now()+".jpg");
//     },
//   });
  
//   const upload = multer({ storage: storage });
//   router.post("/upload", upload.single("file"), (req, res) => {
//     res.status(200).json("File has been uploaded");
//   });
  


module.exports=router;