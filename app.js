const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const { connectDatabase } = require('./config/database');
const cloudinary=require('cloudinary');
require('dotenv').config()

if(process.env.NODE_ENV!=="production"){
    require("dotenv").config({path:"env/.env"});
}


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})
// using middleware
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use(cookieParser());

const post=require('./routes/post');
const user=require('./routes/users');


app.get('/',(req,res) => {
    res.status(200).send('Social Media App')
})

app.use("/api/v1",post);
app.use("/api/v1",user);



const port = process.env.PORT || 3000
const start = async () => {
    try {
        connectDatabase();
        app.listen(port,()=>{
            console.log(`Server is running on ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log(error)        
    }
}

start()







