import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";

    function Chat({messages}) {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

       
        await axios.post('/messages/new', {
            "message": input,
            "name":"shivani",
            "timestamp":"Just now !",
            "received":true,
        });
// shivani
// malvika
// true
        setInput('');
    }
  return (
    <div className="chat">
        <div className="chat_header">
            <Avatar/>
            <div className="chat_headerInfo">
                <h3>Malicious Attacker</h3>
                <p>Last seen at...</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            {/* <p className='chat_message chat_receiver'>
                <span className='chat_name'>Shivani</span>
                This is a message
                <span className='chat_timestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>

            <p className='chat_message'>
                <span className='chat_name'>Shivani</span>
                This is a message
                <span className='chat_timestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>  */}
                {messages.map(message => (
                    <p className={`chat_message ${message.received && "chat_receiver"}`}>
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    <span className="chat_timestamp">{message.timestamp}</span>
                    </p>
                ))}
            </div>


        <div className="chat_footer">
            <InsertEmoticonIcon/>
            <form>
                {/* <input value={input} OnChange={(e)=>setInput(e.target.value)} placeholder="Type a message" type="text"/>
                <button type="submit" onClick={sendMessage}>Send a message</button> */}
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <KeyboardVoiceIcon/>
        </div>
    </div>
  )
}

export default Chat