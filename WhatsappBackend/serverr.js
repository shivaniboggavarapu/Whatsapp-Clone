import express from "express";
import mongoose from "mongoose";
import Messages from './dbMessages.js';
import Pusher from "pusher";
import cors from 'cors';

const app=express();
const port=process.env.PORT || 5000;
const pusher = new Pusher({
  appId: "1475666",
  key: "b843ba505550b3c345e1",
  secret: "e4424816581248ab6a9a",
  cluster: "eu",
  useTLS: true
});

app.use(express.json());
app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     next();
// });

const dbUrl='mongodb+srv://shivani:VM0vXr2dUUVBi2WU@cluster0.qz9mesp.mongodb.net/whatsappclone?retryWrites=true&w=majority';
mongoose.connect(dbUrl);
const db=mongoose.connection;
db.once("open",()=>{
    console.log("Db connected");
    const msgCollection=db.collection('messagecontents');
    const changeStream=msgCollection.watch();

    changeStream.on("change",(change)=>{
       console.log('A change Occured');

       if(change.operationType === 'insert'){
        const messageDetails=change.fullDocument;
        pusher.trigger('messages','inserted',{
            name:messageDetails.name,
            message:messageDetails.message,
            timestamp:messageDetails.timestamp,
            received:messageDetails.received,
        });
        }
        else{
            console.log('Error trigerring pusher');
        }
    });
});
mongoose.connect(dbUrl,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.get("/",(req,res)=>{res.send("hello world");});
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
app.listen(port,() => {
  console.log(`Server is listening ${port}`);
});