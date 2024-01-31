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
        let el = posts.filter(e => e.id === id)
        if (el.length === 1) {
            return el[0]
        }

        return null
    }
    const getPostIndex = (id) => {
        let output 
        posts.forEach((e, i) => {
            if (e.id === id) { output = i }
        })

        return output   
    }

    const editPost = async (id, data) => await axios.put(`http://localhost:3001/posts/${id}`, data)
    const deletePost = (id) =>  {
        axios.delete(`http://localhost:3001/posts/${id}`)

        let output = posts.filter(e => e.id !== id)
        setPosts(output)
    }

    const likePost = (id, username, userId) => {
        if (userId === 0) {
            alert('Guests cannot like posts.')
            return
        }

        const targetPost = getPost(id)
        const index = getPostIndex(id)
        
        if (targetPost.likes.find((e) => e.userId === userId)) {
            let likeIndex
            targetPost.likes.forEach((e, i) => {
                if (e.userId === userId) likeIndex = i
            })

            targetPost.likes.splice(likeIndex, 1);
        } else {
            targetPost.likes.push({username, userId})
        }

        editPost(id, targetPost)
        setPosts([...posts.slice(0, index), targetPost, ...posts.slice(index + 1)])
        console.log(targetPost.likes)
    }

    const dataToShare = {
        posts, uploadPost, fetchPosts, editPost, deletePost, likePost
    }

    return (
        <PostsContext.Provider value={dataToShare}>
            { children }
        </PostsContext.Provider>
    )
}

export { Provider };
export default PostsContext