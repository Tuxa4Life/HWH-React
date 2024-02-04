import React, { useState } from "react";
import UserCard from "./UserCard";

const Settings = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)

    const [userCard, setUserCard] = useState(false)
    const toggleUserCard = () => setUserCard(!userCard)

    return (
        <div className="settings-container">
            { userCard ? <UserCard toggleUserCard={toggleUserCard} /> : null }

            <div className={`setting-buttons ${isOpen ? 'open-setting-buttons' : ''}`}>
                <span>
                    <button onClick={toggleUserCard} className="ui icon secondary inverted button">
                        <i className="user icon"></i>
                    </button>
                </span>
                <span>
                    <button className="ui icon secondary inverted button">
                        <i className="adjust icon"></i>
                    </button>
                </span>
                <span>
                    <button className="ui icon secondary inverted button">
                        <i className="phone icon"></i>
                    </button>
                </span>
            </div>
            
            <div className="hider"></div>

            <button onClick={toggleIsOpen} className="ui icon secondary inverted button">
                <i className="cog icon"></i>
            </button>
        </div>
    )
}

export default Settings;