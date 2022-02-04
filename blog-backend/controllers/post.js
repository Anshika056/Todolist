const User = require("../models/users");
const Post = require("../models/post");
const multer =  require("multer");

const storage = multer.diskStorage({           //storage for the images
    destination: (req, file, cb) => {            // where should be stored
      cb(null, "images");
    },
    filename: (req, file, cb) => {                        
      cb(null, file.filename +Date.now()+".jpg");
    },
  });
const upload = multer({ storage: storage });

exports.createpost = upload.single("file"),async (req,res)=>{
    try{
    
      const posts =   new Post(req.body);
      const newpost = await posts.save();
      if(newpost){
          res.status(200).json({post:newpost})
      }else{
          res.status(400).json("post was not created");
      }
    }catch(err){
        res.status(400).json(err);
    }
}


exports.updatepost = async (req,res)=>{
    try{
     const posts = await Post.findById(req.params.id);
     if(req.body.username === posts.username){
         try{
           const updatedpost = await Post.findByIdAndUpdate(req.params.id
            ,{
                $set:req.body,
            }
            ,{
                new:true
            });
            if(updatedpost){
                res.status(200).json(updatedpost);
                console.log(updatedpost);
            }
            else{
                res.send("post not updated");
            } 
         }catch(err){
             res.send(err);
         }
     }else{
         res.status(400).json("you can only update your posts");
     }

    }catch(err){
        res.send(err);
    }
}

exports.deletepost = async (req,res)=>{

    try{
    
     const posts = await Post.findById(req.params.id);
     if(posts.username === req.body.username){
         try{
           const deletedpost = await posts.delete();
            if(deletedpost){
               res.status(200).json("your post has been deleted");
               console.log(deletedpost);
            }
            else{
                res.send("post not deleted");
            } 
         }catch(err){
             res.send(err);
         }
     }else{
         res.status(400).json("you can only delete your posts");
     }

    }catch(err){
        res.send(err);
    }
}


exports.getpost= async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  };

