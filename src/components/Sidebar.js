import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import db from './firebase';

const Sidebar = () => {

    const [rooms, setrooms] = useState([{name : ""}]);

    useEffect(() => {
        Fetchdata()
    }, [])

    // window.addEventListener('load', () => {
    //     Fetchdata();

    // });

    // Fetch the required data using the get() method
    const Fetchdata = () => {
        db.collection("rooms").get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setrooms(arr => [...arr, data]);

            });
        })

        console.log(rooms);
    }
    // console.log(rooms);



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
                <SidebarChat />
                {/* {rooms.map(room => (
                    <SidebarChat key={room.id} id = {room.id} name = {room.data.name} />
                ))} */}

            </div>
        </div>


    )
}

export default Sidebar;