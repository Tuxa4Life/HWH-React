import React from "react";
import usePostsContext from "../Hooks/usePostsContext";
import useUsersContext from "../Hooks/useUsersContext"
import Post from './Post';

const PostContainer = () => {
    const { posts } = usePostsContext()
    const { currentUser } = useUsersContext()
    
    const content = posts.map(e => {
        let userId = currentUser ? currentUser.id : 0
        return <Post key={e.id} content={e} isOwn={userId === e.authorId} currentUserId={userId} currentBookmarks={currentUser.bookmarks}/>
    })
    return (
        <div className="post-container ui cards">
            { content }
        </div>
    )
}

export default PostContainer;