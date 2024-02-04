import React, { useState } from "react";
import useUsersContext from "../../../Hooks/useUsersContext";

const EditUsername = ({ toggleUsernameEdit }) => {
    const { updateUserData, currentUser } = useUsersContext()
    const [newUsername, setNewUsername] = useState('')

    const editUsername = (e) => {
        e.preventDefault()
        
        if (/[^ ]/.test(newUsername)) {
            let user = currentUser
            user.username = newUsername

            updateUserData(user)
            toggleUsernameEdit()
        }

    }

    return (
        <div style={{width: '100%', height: '100dvh', position: 'fixed', top: '0', left: '0',    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={editUsername} className="ui form">
                <div className="field">
                    <label>Edit your username: </label>
                    <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} placeholder="New username"/>
                </div>

                <div className="btn-holder" style={{width: '100%', display: 'flex', justifyContent: 'right'}}>
                    <button className="ui button secondary inverted" type="submit">Edit</button>
                    <button className="ui button" type="button" onClick={toggleUsernameEdit}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditUsername;