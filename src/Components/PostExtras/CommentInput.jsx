import React, { useState } from "react";
import usePostsContext from "../../Hooks/usePostsContext";
import useUsersContext from "../../Hooks/useUsersContext";

const CommentInput = ({ postId }) => {
    const { commentOnPost } = usePostsContext()
    const { currentUser } = useUsersContext()

    const [text, setText] = useState('')

    const comment = (e) => {
        e.preventDefault()
        if (currentUser == null) {
            alert('Guests cannot comment.')
            return
        }

        if (/[^ ]/.test(text)) {
            commentOnPost(currentUser.username, text, postId)
            setText('')
        }
        setText('')
    }

    return (
        <form onSubmit={comment} className="ui form">
            <div className="ui action input">
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Write a comment..." />
                <button type="submit" className="ui icon button">
                    <i className="paper plane outline icon"></i>
                </button>
            </div>
        </form>
    )
}

export default CommentInput;