import { Avatar } from '@mui/material'
import db from '../firebase'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { collection, setDoc, doc } from "firebase/firestore";





// const docRef = await addDoc(collection(db, "rooms"), {
//     name: roomName
// });

export const SidebarChat = ({ addNewChat, id, name }) => {


    async function addData(roomName) {
        try {
            const docRef = doc(db, 'rooms', roomName);
            await setDoc(docRef, { name: roomName });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const createChat = (e) => {
        const roomName = prompt("please enter name for your chat");
        console.log(roomName)

        if (roomName) {

            addData(roomName)
        }
    }
    const [seed, setseed] = useState("")
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, []);




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
