import React, { useState } from "react";
import Register from "./Auth/Register";
import useUsersContext from "../Hooks/useUsersContext";
import Login from "./Auth/Login";

const UserCard = ({ toggleUserCard }) => {
    const { currentUser } = useUsersContext()
    const [openLogin, setOpenLogin] = useState(true)

    return (
        <div className="usercard-container">
            { currentUser !== null ? 'profile' : null }
            { currentUser === null && openLogin ? <Login toggleUserCard={toggleUserCard} switchToRegister={() => setOpenLogin(false)}/> : null }
            { currentUser === null && !openLogin ? <Register toggleUserCard={toggleUserCard} switchToLogin={() => setOpenLogin(true)}/> : null }
        </div>
    )

    
    
}

export default UserCard;