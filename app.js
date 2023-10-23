const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

if(process.env.NODE_ENV!=="production"){
    require("dotenv").config({path:"env/.env"});
}

// using middleware
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use(cookieParser());

const post=require('./routes/post');
const user=require('./routes/users');

app.get("api/v1", (req,res) => {
    res.send('Hello');
})
app.use("/api/v1",post);
app.use("/api/v1",user);

module.exports=app;    