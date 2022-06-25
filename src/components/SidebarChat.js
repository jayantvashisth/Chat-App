import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

export const SidebarChat = () => {
  return (
    <div className='sidebar_Chat'>
        <Avatar/>
        <div className="sidebarChat_info">
            <h2>Room name</h2>
            <p>last message..</p>
        </div>
    </div>
  )
}
