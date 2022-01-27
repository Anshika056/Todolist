const express =  require("express");
const app =  express();
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT ;

require("./database/connect");

const userroutes = require("./routes/user");
const usercrudroutes = require("./routes/user-crud");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require('./models/users');


app.use("/api",userroutes);
app.use("/api",usercrudroutes);


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})
