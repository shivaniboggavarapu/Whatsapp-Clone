import express from "express";
import mongoose from "mongoose";
// const Rooms=require("./dbRooms.js");
import Rooms from "./dbRooms.js";
// import Messages from './dbMessages.js'
// app config
// const mongoose = require('mongoose');
// const express=require ("express");
// const mongoose=require ("mongoose");
const app=express();
// const port=process.env.PORT || 5000;
// middleware
app.use(express.json());
//DB config
const dbUrl='mongodb+srv://shivani:VM0vXr2dUUVBi2WU@cluster0.qz9mesp.mongodb.net/whatsappclone?retryWrites=true&w=majority';
// const dbUrl='mongodb+srv://shivani:VM0vXr2dUUVBi2WU@cluster0.qz9mesp.mongodb.net/whatsapp?retryWrites=true&w=majority';
// mongoose.connect(connection_url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// const serverSelectionError = new ServerSelectionError();
mongoose.connect(dbUrl);
const db=mongoose.connection;
db.once("open",()=>{
    console.log("Db connected");
});
mongoose.connect(dbUrl,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// ????

// api routes / is base url
app.get("/",(req,res)=>{res.send("hello world");});
// app.get("/",(req,res)=>res.status(200).send("hello world"));
app.post("/group/create",(req,res)=>{
     const name=req.body.groupName;
     Rooms.create({name},(err,data)=>{
        if(err){
            return res.status(500).send(err);
        }
        else{
            return res.status(201).send(data);
        }
     });
});

app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.post("/messages/new",(req,res)=>{
    const dbMessage=req.body
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

// listen
// app.listen(port,()=>console.log(`Listening to localhost:${port}`));
// app.listen(port,() => {
//   console.log(`Server is listening ${port}`);
// });
app.listen(5000,()=>{
    console.log("server is up and running");
});