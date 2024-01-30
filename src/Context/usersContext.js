import { createContext, useState } from "react";
import axios from "axios";

const UsersContext = createContext()

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const registerUser = async (obj) => {
        const response = await axios.post('http://127.0.0.1:3001/users', obj)
        setCurrentUser(response.data)
        setUsers([...users, response.data])
    }

    const dataToShare = {
        users, currentUser, registerUser
    }

    return (
        <UsersContext.Provider value={dataToShare}>
            { children }
        </UsersContext.Provider>
    )
}

export { UserProvider };
export default UsersContext;