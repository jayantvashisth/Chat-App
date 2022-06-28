import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
    return (
        <div className='app'>
            {/* <h1>whatsapp this sids</h1> */}

            <div className="app_body">

                <Sidebar />
                <Chat />
                {/* header */}
                {/* chat area */}

            </div>
        </div>
    );
}

export default App;
