import { createContext, useState, useCallback } from "react";
import axios from "axios";

const UsersContext = createContext()

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    const fetchUsers = useCallback(async () => {
        const response = await axios.get('http://127.0.0.1:3001/users')
        setUsers(response.data)
    }, [])

    const registerUser = async (obj) => {
        const response = await axios.post('http://127.0.0.1:3001/users', obj)
        setCurrentUser(response.data)
        setLoggedIn(true)
        setUsers([...users, response.data])

        localStorage.setItem('user-exists', JSON.stringify(response.data))
    }

    const logoutUser = () => {
        setCurrentUser(null)
        setLoggedIn(false)

        localStorage.removeItem('user-exists')
    }

    const loginUser = ({ email, password }) => {
        let targetUser = users.filter(user => user.email === email && user.password === password)
        if (targetUser.length === 1) {
            setCurrentUser(targetUser[0])
            setLoggedIn(true)

            localStorage.setItem('user-exists', JSON.stringify(targetUser[0]))
            return true
        } else {
            return false
        }
    }

    const getUser = (id) => {
        const output = users.filter(e => e.id === id)
        if (output.length === 1) return output[0]
        return null
    }

    const bookmarkPost = (post) => {
        const user = currentUser
        
        if (user.bookmarks.find(e => e.id === post.id)) {
            let index
            user.bookmarks.forEach((e, i) => {
                if (e.id === post.id) index = i
            })

            user.bookmarks.splice(index, 1)
        } else {
            user.bookmarks.push(post)
        }

        setCurrentUser(user)
        localStorage.setItem('user-exists', JSON.stringify(user))
        axios.put(`http://127.0.0.1:3001/users/${user.id}`, user)
    }

    const onApplicationLoad = useCallback(() => {
        if (localStorage.getItem('user-exists')) {
            let user = JSON.parse(localStorage.getItem('user-exists'))

            setCurrentUser(user)
            setLoggedIn(true)
        }
    }, [])

    const dataToShare = {
        users, currentUser, loggedIn, registerUser, logoutUser, loginUser, fetchUsers, getUser, onApplicationLoad, bookmarkPost
    }

    return (
        <UsersContext.Provider value={dataToShare}>
            { children }
        </UsersContext.Provider>
    )
}

export { UserProvider };
export default UsersContext;