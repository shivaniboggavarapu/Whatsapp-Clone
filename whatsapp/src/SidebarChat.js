import React from 'react';
import "./SidebarChat.css";
import {Avatar} from "@mui/material";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar/>
      <div className="sidebarChat_info">
         <h2>Shivani</h2>
         <p>This is the last message</p>
      </div>
      {/* <div className="sidebarChat_info">
         <h2>Malvika</h2>
         <p>This is the last message</p>
      </div> */}
      
    </div>
//     <div className="sidebarChat">
// <div className="sidebarChat_info">
//          <h2>Malvika</h2>
//          <p>This is the last message</p>
//       </div>
//     </div>
  )
}

export default SidebarChat
