import React, { useState, useEffect } from "react";
import '../Assets/styles/Assets.css'
import PostUpload from "./PostUpload";
import usePostsContext from "../Hooks/usePostsContext";
import PostContainer from "./PostContainer";

const Assets = () => {
    const { fetchPosts } = usePostsContext()

    const [uploadOpen, setUploadOpen] = useState(false)
    const toggleUpload = () => {
        setUploadOpen(!uploadOpen)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="assets-container">
            <button onClick={toggleUpload} className="ui button secondary inverted create">
                <i className="plus icon"></i> Create
            </button>

            { uploadOpen ? <PostUpload toggleUpload={toggleUpload} /> : null }
            <PostContainer />
        </div>
    )
}

export default Assets;