import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";
import sidebarchats from "./sidebarchats";
function Sidebar(){
    return (
        <div className="sidebar">
             <div className="sidebar_header">
                <div className="sidebar_headerRight">
                    <div className="Avatar">
                    <Avatar src="whatsapp\whatsapp dp.jpg"/>
                    </div>
                    <div className="icons">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    </div>
                </div>
             </div>
             <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                   <SearchIcon/>
                   <input type="text" placeholder="Search or start new chat"/>
                </div>
             </div>
             <div className="sidebar_chats">
               <SidebarChat/>
               <sidebarchats/>
               {/* <SidebarChat/> */}
               {/* <SidebarChat/> */}
             </div>
        </div>
    )
}

export default Sidebar