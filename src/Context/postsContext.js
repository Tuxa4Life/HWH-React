import { createContext, useState, useCallback } from "react";
import axios from "axios";

const PostsContext = createContext()

const Provider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const fetchPosts = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/posts')
        setPosts(response.data)
    }, [])

    const uploadPost = async (title, text) => {
        const response = await axios.post('http://localhost:3001/posts', {
            author: "Guest", title, text,
            subject: 'Default',
            likes: [],
            comments: [],
            date: new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' })
        })
        
        setPosts([...posts, response.data])
    }

    const dataToShare = {
        posts, uploadPost, fetchPosts
    }

    return (
        <PostsContext.Provider value={dataToShare}>
            { children }
        </PostsContext.Provider>
    )
}

export { Provider };
export default PostsContext