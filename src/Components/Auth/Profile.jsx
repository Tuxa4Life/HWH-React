import React from "react";
import useUsersContext from "../../Hooks/useUsersContext";

const Profile = ({ toggleUserCard }) => {
    const { currentUser, logoutUser } = useUsersContext()

    const logout = () => {
        logoutUser()
        toggleUserCard()
    }

    return (
        <div className="card" style={{backgroundColor: 'white', border: '1px black solid', borderRadius: '7px', padding: '15px', minWidth: '270px'}}>
            <div className="content">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h2 style={{margin: '0'}} className="header">{currentUser.username}</h2>
                    <i style={{marginLeft: '10px', cursor: 'pointer'}} className="ui icon pencil"></i>
                </div>
                <div className="meta">{currentUser.email}</div>
                <span style={{textDecoration: 'underline', fontSize: '12px', cursor: 'pointer'}}>reset password</span>
            </div>
            <hr style={{margin: '15px 0'}}/>
            <div className="btn-holder" style={{display: 'flex', justifyContent: 'right'}}>
                <button className="ui button secondary inverted" type="button" onClick={logout}>Log out</button>
                <button className="ui button" type="button" onClick={toggleUserCard}>Close</button>
            </div>
        </div>
    )
}

export default Profile;