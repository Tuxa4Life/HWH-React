import React, { useState } from "react";
import usePostsContext from '../../Hooks/usePostsContext';
import useUsersContext from "../../Hooks/useUsersContext";

const PostUpload = ({ toggleUpload }) => {
    const { uploadPost } = usePostsContext();
    const { currentUser } = useUsersContext()

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const upload = (e) => {
        e.preventDefault()
        let author = 'Guest'
        let authorId = -1
        if (currentUser !== null) {
            author = currentUser.username
            authorId = currentUser.id
        }

        uploadPost(title, text, author, authorId)
        toggleUpload()
    }

    return (
        <div onSubmit={upload} className="post-upload" style={{zIndex: '5'}}>
            <form className="ui form">
                <h3>Create a new post</h3>
                <div className="field">
                    <label>Title: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="field">
                    <label>Text: </label>
                    <textarea rows="3" value={text} onChange={e => setText(e.target.value)}></textarea>
                </div>

                <div className="btn-holder">
                    <button type="submit" className="ui primary button">Post</button>
                    <button onClick={toggleUpload} type="button" className="ui button">Close</button>
                </div>
            </form>
        </div>
    )
}

export default PostUpload;