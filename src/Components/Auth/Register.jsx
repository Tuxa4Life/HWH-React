import React, { useState } from "react";
import useUsersContext from "../../Hooks/useUsersContext";

const Register = ({ toggleUserCard, switchToLogin }) => {
    const { registerUser } = useUsersContext()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = (e) => {
        e.preventDefault()

        let user = {
            username, email, password, 
            bookmarks: []
        }
        registerUser(user)
        toggleUserCard()
    }

    return (
        <form onSubmit={register} className="ui form">
            <h3 style={{width: '100%', textAlign: 'center'}}>Register</h3>
            <hr />
            <div className="field">
                <label>Username: </label>
                <input required type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label>Email: </label>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="No worries, you can use fake one." />
            </div>
            <div className="field">
                <label>Password: </label>
                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="But remember creds to login later!" />
            </div>
            <div className="btn-holder" style={{display: 'flex', alignItems: 'center'}}>
                <p onClick={switchToLogin} style={{textDecoration: 'underline', fontSize: '14px', margin: '0', cursor: 'pointer'}}>Login</p>
                <span style={{width: '100%', display: 'flex', justifyContent: 'right'}}>
                    <button className="ui secondary inverted button" type="submit">Register</button>
                    <button className="ui button" type="button" onClick={toggleUserCard}>Close</button>
                </span>
            </div>
        </form>
    )
}

export default Register;