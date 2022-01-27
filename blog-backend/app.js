const express =  require("express");
const app =  express();
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT ;

require("./database/connect");

const userroutes = require("./routes/user");
const usercrudroutes = require("./routes/user-crud");
const postroutes = require("./routes/post");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require('./models/users');
const post = require('./models/post');


app.use("/api",userroutes);
app.use("/api",usercrudroutes);
app.use("/api",postroutes);

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})
