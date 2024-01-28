import React from "react";
import './Assets/styles/App.css'
import Navbar from "./Components/Navbar";
import Route from "./Routes/Route";

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            
            <Route path={'/'}>Homepage</Route>
            <Route path={'/assets'}>Assets</Route>
            <Route path={'/chats'}>Chats</Route>
        </div>
    )
}

export default App;