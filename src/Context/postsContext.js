import { createContext, useState, useCallback } from "react";
import axios from "axios";

const PostsContext = createContext()

const Provider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const fetchPosts = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/posts')
        setPosts(response.data)
    }, [])

    const uploadPost = async (title, text, author, authorId) => {
        const response = await axios.post('http://localhost:3001/posts', {
            author, title, text, authorId,
            subject: 'Default',
            likes: [],
            comments: [],
            date: new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' })
        })
        
        setPosts([...posts, response.data])
    }

    const getPost = (id) => {
        posts.map(e => {
            if (e.id === id) {
                return e
            }
        })
    }

    const editPost = (id, data) => axios.put(`http://localhost:3001/posts/${id}`, data)
    const deletePost = (id) =>  {
        axios.delete(`http://localhost:3001/posts/${id}`)

        let output = posts.filter(e => e.id !== id)
        setPosts(output)
    }

    const dataToShare = {
        posts, uploadPost, fetchPosts, getPost, editPost, deletePost
    }

    return (
        <PostsContext.Provider value={dataToShare}>
            { children }
        </PostsContext.Provider>
    )
}

export { Provider };
export default PostsContext