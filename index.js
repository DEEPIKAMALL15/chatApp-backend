/* //const express = require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//import {app ,  server } from "./socket/socket.js"; 

dotenv.config({});


const app = express();
const PORT = process.env.PORT || 5000 ;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOption));

// routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);

app.listen( PORT , () =>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
}) */

    import express from "express";   // <-- yeh add kar
    import dotenv from "dotenv";
    import connectDB from "./config/database.js";
    import userRoute from "./routes/userRoute.js";
    import messageRoute from "./routes/messageRoute.js";
    import cookieParser from "cookie-parser";
    import cors from "cors";
    import { app, server } from "./socket/socket.js";
    
    dotenv.config();
    
    const PORT = process.env.PORT || 5000;
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    
    app.use(cors({
  origin: [process.env.FRONTEND, "http://localhost:3000"],
  credentials: true,
}));

    

    
    // routes
    
    app.use("/api/v1/user", userRoute);
    app.use("/api/v1/message", messageRoute);
    app.get("/",(req,res)=>{
        return res.send("Backend is running");
    }) 
    
    server.listen(PORT, () => {
        connectDB();
        console.log(`Server running at port ${PORT}`);
    });
    