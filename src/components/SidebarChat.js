import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import './SidebarChat.css'
// import { styled } from "@mui/styles";
import {db} from "./firebase"



export default function SidebarChat({ addNewChat, id, name }) {

    const [seed, setseed] = useState("")


    const createChat = () => {
        const roomName = prompt("please enter name for your chat");
        console.log(roomName)

        if (roomName) {

            // db.collection("rooms").add({
            //     name: roomName,
            // })
        }
    }
    
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, []);




    return !addNewChat ? (
        <div className='sidebarChat'>
            {/* <Avatar src={`https://avatars.dicebear.com/api  /human/${seed}.svg`} /> */}
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


// export default SidebarChat;