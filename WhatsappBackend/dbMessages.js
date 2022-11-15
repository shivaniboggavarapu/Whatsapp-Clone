import mongoose from "mongoose";
const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    received:Boolean,
});
// collections
export default mongoose.model('messagecontents',whatsappSchema)
// import express from "express";
// import mongoose from "mongoose";
// import Messages from './dbMessages.js';
// const app=express();
// const port=process.env.PORT || 5000;
// const pusher = new Pusher({
//   appId: "1475666",
//   key: "b843ba505550b3c345e1",
//   secret: "e4424816581248ab6a9a",
//   cluster: "eu",
//   useTLS: true
// });
// app.use(express.json());
// const dbUrl='mongodb+srv://shivani:VM0vXr2dUUVBi2WU@cluster0.qz9mesp.mongodb.net/whatsappclone?retryWrites=true&w=majority';
// mongoose.connect(dbUrl);
// const db=mongoose.connection;
// db.once("open",()=>{
//     console.log("Db connected");
// });
// mongoose.connect(dbUrl,{
//     // useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// app.get("/",(req,res)=>{res.send("hello world");});
// app.get('/messages/sync',(req,res)=>{
//     Messages.find((err,data)=>{
//         if(err){
//             res.status(500).send(err);
//         }
//         else{
//             res.status(201).send(data);
//         }
//     })
// })

// app.post("/messages/new",(req,res)=>{
//     const dbMessage=req.body
//     Messages.create(dbMessage,(err,data)=>{
//         if(err){
//             res.status(500).send(err);
//         }
//         else{
//             res.status(201).send(data);
//         }
//     })
// })
// app.listen(port,() => {
//   console.log(`Server is listening ${port}`);
// });