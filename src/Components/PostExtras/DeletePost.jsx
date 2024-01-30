import React from "react";
import Post from "../Post";
import usePostsContext from "../../Hooks/usePostsContext";

const DeletePost = ({ toggleDelete, toggleTools, content }) => {
    const { deletePost } = usePostsContext()

    const _delete = () => {
        deletePost(content.id)

        toggleDelete()
        toggleTools()
    }

    return (
        <div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '4'}}>
            <div className="card" style={{background: 'white', border: '1px black solid', borderRadius: '7px', padding: '15px', minWidth: '270px'}}>
                <div className="content">
                    <h4 style={{width: '100%', textAlign: 'center'}} className="header">Are you sure deleting this post?</h4>
                    <div style={{padding: '15px', margin: '20px 0', borderRadius: '7px', boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5'}}>
                        <Post content={content} isOwn={false}/>
                    </div>
                </div>

                <div className="btn-holder" style={{display: 'flex', justifyContent: 'right'}}>
                    <button onClick={_delete} className="ui red inverted button">Delete</button>
                    <button onClick={toggleDelete} className="ui button">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePost;