import React from "react";
import usePostsContext from "../Hooks/usePostsContext";
import Post from './Post';

const PostContainer = () => {
    const { posts } = usePostsContext()
    
    const content = posts.map(e => {
        return <Post key={e.id} content={e}/>
    })
    return (
        <div className="post-container ui cards">
            { content }
        </div>
    )
}

export default PostContainer;