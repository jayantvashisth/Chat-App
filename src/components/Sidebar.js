import React from 'react'
import './Sidebar.css'
import { SidebarChat } from './SidebarChat';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <AccountCircleIcon />

                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>
            </div>

            <div className="sidebar_search">
                <SearchIcon />
                <input type="text" placeholder='search or start new chat' />
            </div>

            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                
            </div>
        </div>


    )
}
