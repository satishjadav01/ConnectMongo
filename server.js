require("dotenv").config();

const express = require("express");
const connectDB  = require("./config/db");
const userRoutes = require('./routes/userRoutes');

const app = express();

app.get("/",(req,res)=>{
    res.send("Node js and MongoDB API is runing ")
});

app.use("/api/users",userRoutes);

const startServer = async () =>{
    await connectDB();

    app.listen(process.env.PORT || 5000 ,()=>{
        console.log(`server is runing on port ${process.env.PORT || 5000}`);
    });
};
