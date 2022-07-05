import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';



function Chat() 
{
    const [input, setinput] = useState("")
    const sendMessage = (e)=>{
        e.preventDefault();
        console.log(input)
        setinput("");
    };


    return (
        <div className='chat'>

            <div className="chat_header">

                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>last seen at..</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className="chat_body">
                <div className={`chat_message ${true && "chat_receiver"}`}>
                    <p >
                        <span className='chat_name'>jayant vashisth</span>
                        hey guysz
                        <span className='chat_timeStamp'>7:15pm</span>
                    </p>
                </div>
                <div className="chat_message">
                    <p>hey guysz</p>
                </div>
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form >
                    <input value={input} onChange = {(e)=> setinput(e.target.value)} type="text" placeholder='type a messade' />
                    <button onClick={sendMessage}>send a message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat;