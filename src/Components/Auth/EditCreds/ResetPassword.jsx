import React, { useState } from "react";
import useUsersContext from "../../../Hooks/useUsersContext";

const ResetPassword = ({ togglePasswordReset }) => {
    const { currentUser, updateUserData } = useUsersContext()

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const resetPassword = (e) => {
        e.preventDefault()

        if (currentUser.password === oldPassword) {
            let user = currentUser
            user.password = newPassword

            updateUserData(user)
            togglePasswordReset()
        } else {
            alert('Old password is not correct.')
        }
    }

    return (
        <div style={{width: '100%', height: '100dvh', position: 'fixed', top: '0', left: '0',    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={resetPassword} className="ui form">
                <div className="field">
                    <label>Old password: </label>
                    <input required type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                </div>
                <div className="field">
                    <label>New password: </label>
                    <input required type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                </div>

                <div className="btn-holder" style={{width: '100%', display: 'flex', justifyContent: 'right'}}>
                    <button className="ui button secondary inverted" type="submit">Reset</button>
                    <button className="ui button" type="button" onClick={togglePasswordReset}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;