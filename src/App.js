import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <div className='app'>
            {/* <h1>whatsapp this sids</h1> */}

            <div className="app_body">

                <Router>
                    <Sidebar />

                    <Routes>
                        <Route exact path='/rooms/:roomId' element={<> <Chat /></>}>

                            {/* <Sidebar />
                            <Chat />
                             */}

                        </Route>
                        <Route exact path='/' element={<Chat />}>

                        </Route>

                    </Routes>
                </Router>


            </div>
        </div>
    );
}

export default App;
