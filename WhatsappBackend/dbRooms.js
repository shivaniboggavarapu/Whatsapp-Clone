import mongoose from "mongoose";
const roomsSchema=new mongoose.Schema(
    {
        name:String,
    },
    {
        timestamp:String,
    },
    {
        message:String,
    },
    {
        Received:Boolean,
    },
    
);
const Rooms=mongoose.model("rooms",roomsSchema);

export default Rooms;