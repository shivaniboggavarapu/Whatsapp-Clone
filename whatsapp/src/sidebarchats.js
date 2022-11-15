import React from 'react';
import "./SidebarChat.css";
import {Avatar} from "@mui/material";
function sidebarchats() {
  return (
    <div className="sidebarChat">
      <Avatar/>
      <div className="sidebarChat_info">
         <h2>Group 1011</h2>
         <p>This is the message</p>
      </div>
      <div className="sidebarChat">
      <Avatar/>
      <div className="sidebarChat_info">
         <h2>Shivani</h2>
         <p>This is the last message</p>
      </div>
      
    </div>
    </div>
  )
}

export default sidebarchats
