import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'



export const SidebarChat = ({addNewChat, id, name}) => {
 
    const createChat = () => {
        const roomName = prompt("please enter name for your chat");
        console.log(roomName)
    
        if(roomName){
    
            // do some database stuff here
        }
    }
    const [seed, setseed] = useState("")
    useEffect(()=>{
        setseed(Math.floor(Math.random()*5000))
    },[]);




    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>last message..</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}
