const express =  require("express");
const app =  express();
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT ;

require("./database/connect");

const userroutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require('./models/user');


app.use("/api",userroutes);


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})
