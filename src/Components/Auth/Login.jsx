import React, { useState, useEffect } from "react";
import useUsersContext from "../../Hooks/useUsersContext";

const Login = ({ toggleUserCard, switchToRegister }) => {
    const { loginUser, fetchUsers } = useUsersContext()

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [warning, setWarning] = useState(false)

    const login = (e) => {
        e.preventDefault()

        if (loginUser({ email, password })) {
            toggleUserCard()
        } else {
            setWarning(true)
        }
    }

    return (
        <form onSubmit={login} className="ui form">
            <h3 style={{width: '100%', textAlign: 'center'}}>Login</h3>
            <hr />
            <div className="field">
                <label>Email: </label>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="If you don't login, that's okay!" />
            </div>
            <div className="field">
                <label>Password: </label>
                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="You'll be displayed as 'Guest'" />
            </div>

            <div style={{display: `${warning ? 'block' : 'none'}`}} className="ui warning message">
                <div className="header">Please check again.</div>
                <ul className="list">
                    <li>Email might be wrong;</li>
                    <li>Password might be wrong.</li>
                    <li>Account might not exist.</li>
                </ul>
            </div>

            <div className="btn-holder" style={{display: 'flex', alignItems: 'center'}}>
                <p onClick={switchToRegister} style={{textDecoration: 'underline', fontSize: '12px', margin: '0', cursor: 'pointer'}}>Register</p>
                <span style={{width: '100%', display: 'flex', justifyContent: 'right'}}>
                    <button className="ui secondary inverted button" type="submit">Login</button>
                    <button className="ui button" type="button" onClick={toggleUserCard}>Close</button>
                </span>
            </div>
        </form>
    )
}

export default Login;