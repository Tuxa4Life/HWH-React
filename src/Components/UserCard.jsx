import React, { useState } from "react";
import Register from "./Auth/Register";

const UserCard = ({ toggleUserCard }) => {
    const [cardState, setCardState] = useState(2) // 0 - profile, 1 - login, 2 - register

    return (
        <div className="usercard-container">
            { cardState === 0 ? 'profile' : null }
            { cardState === 1 ? 'login' : null }
            { cardState === 2 ? <Register toggleUserCard={toggleUserCard} /> : null }
        </div>
    )

    
    
}

export default UserCard;