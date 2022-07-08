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

//reference to the collection 
// coll = collection(db, "rooms");

// onSnapshot(collection, function) ====> here the function will be fired every time when the data is changed or the snapshot is updated 




export default function Sidebar() {
    const [rooms, setrooms] = useState([]);
    async function getdata() {

        let coll = collection(db, "rooms");

        onSnapshot(coll, (snapshot) => {
            let finalresult = [];

            snapshot.docs.forEach((doc) => {

                finalresult.push({ ...doc.data(), id: doc.id })

            })
            console.log(finalresult[0].id)
            setrooms(finalresult)
        })


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
                <SidebarChat addNewChat />

                {

                    rooms.map(room => (
                        <SidebarChat key={room.id} id={room.id} name={room.name} />
                    ))}

            </div>
        </div>


    )
}
