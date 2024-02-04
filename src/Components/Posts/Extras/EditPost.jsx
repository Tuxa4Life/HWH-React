import React, { useState } from "react";
import usePostsContext from "../../../Hooks/usePostsContext";

const EditPost = ({ toggleEdit, toggleTools, content }) => {
    const { editPost } = usePostsContext()

    const [title, setTitle] = useState(content.title)
    const [text, setText] = useState(content.text)


    const edit = (e) => {
        e.preventDefault()

        let data = content
        data.title = title
        data.text = text

        editPost(content.id, data)
        toggleEdit()
        toggleTools()
    }

    return (
        <div onSubmit={edit} className="post-upload" style={{zIndex: '5'}}>
            <form className="ui form">
                <h3>Edit post</h3>
                <div className="field">
                    <label>New Title: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="field">
                    <label>New Text: </label>
                    <textarea rows="3" value={text} onChange={e => setText(e.target.value)}></textarea>
                </div>

                <div className="btn-holder">
                    <button type="submit" className="ui primary button">Edit</button>
                    <button onClick={toggleEdit} type="button" className="ui button">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditPost;