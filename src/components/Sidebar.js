import React, { useEffect, useState } from 'react'
import './Sidebar.css'  
import { SidebarChat } from './SidebarChat';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import db from '../firebase';
import {
    collection,
    onSnapshot,
    getDocs,
    Timestamp,
    doc,
    setDoc,
  } from "firebase/firestore";

export default function Sidebar() {
    const [rooms, setrooms] = useState([]);
    async function getdata () {
        let finalresult=[];
        console.log("Pre list",finalresult)
        const querySnapshot = await getDocs(collection(db, "rooms"));
         querySnapshot.forEach((doc) => {
        finalresult.push(doc.data());
        });
        setrooms(finalresult)
        console.log(finalresult)
        
      }
    useEffect(() => {
       getdata();
    }, [])
    

    


    return (
        <div className="sidebar">
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
                <SidebarChat addNewChat/>
          
                {
                   
                rooms.map(room => (
                    <SidebarChat key={room.id} name = {room.name} />
                ))}
                
            </div>
        </div>


    )
}
