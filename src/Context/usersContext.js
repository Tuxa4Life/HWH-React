import { createContext, useState, useCallback } from "react";
import axios from "axios";

const UsersContext = createContext()

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const fetchUsers = useCallback(async () => {
        const response = await axios.get('http://127.0.0.1:3001/users')
        setUsers(response.data)
    }, [])

    const registerUser = async (obj) => {
        const response = await axios.post('http://127.0.0.1:3001/users', obj)
        setCurrentUser(response.data)
        setUsers([...users, response.data])
    }

    const logoutUser = () => setCurrentUser(null)

    const loginUser = ({ email, password }) => {
        let targetUser = users.filter(user => user.email === email && user.password === password)
        if (targetUser.length === 1) {
            setCurrentUser(targetUser[0])
            return true
        } else {
            return false
        }
    }

    const getUser = (id) => {
        users.map(e => {
            if (e.id === id) {
                return e
            }
        })
    }

    const dataToShare = {
        users, currentUser, registerUser, logoutUser, loginUser, fetchUsers, getUser
    }

    return (
        <UsersContext.Provider value={dataToShare}>
            { children }
        </UsersContext.Provider>
    )
}

export { UserProvider };
export default UsersContext;