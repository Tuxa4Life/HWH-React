import React, { useState } from "react";
import PostTools from "./PostExtras/PostTools";
import EditPost from "./PostExtras/EditPost";
import DeletePost from "./PostExtras/DeletePost";
import usePostsContext from "../Hooks/usePostsContext";
import useUsersContext from "../Hooks/useUsersContext";
import Comments from "./PostExtras/Comments";

const Post = ({ content, isOwn, currentUserId }) => {
    const { likePost } = usePostsContext()
    const { getUser } = useUsersContext()

    const [toolsOpen, setToolsOpen] = useState(false)
    const toggleTools = () => setToolsOpen(!toolsOpen)

    const [editOpen, setEditOpen] = useState(false)
    const toggleEdit = () => setEditOpen(!editOpen)

    const [deleteOpen, setDeleteOpen] = useState(false)
    const toggleDelete = () => setDeleteOpen(!deleteOpen)

    const [commentsOpen, setCommentsOpen] = useState(false)
    const toggleComments = () => setCommentsOpen(!commentsOpen)

    const like = () => likePost(content.id, getUser(currentUserId) ? getUser(currentUserId).username : 'Guest', currentUserId)
    return (
        <div className="card" style={{position: 'relative'}}>
            <i onClick={toggleTools} style={{display: `${isOwn ? 'block' : 'none'}`, position: 'absolute', top: '10px', right: '10px'}} className="ellipsis horizontal icon"></i>
            { toolsOpen ? <PostTools toggleEdit={toggleEdit} toggleDelete={toggleDelete} /> : null }

            <div className="content">
                <h3 className="header" style={{margin: '0 0 7px 0'}}>{content.title}</h3>
                <div className="meta">{content.author} · {content.date}</div>
                <div className="description">{content.text}</div>
            </div>

            { editOpen ? <EditPost toggleEdit={toggleEdit} toggleTools={toggleTools} content={content} /> : null }
            { deleteOpen ? <DeletePost toggleDelete={toggleDelete} toggleTools={toggleTools} content={content} /> : null }
            { commentsOpen ? <Comments post={content}/> : null }

            <div className="extra" style={{display: 'flex', justifyContent: 'space-between', color: 'rgb(96, 96, 96)'}}>
                <span>
                    <span onClick={like}><i className={`heart ${content.likes.find((e) => e.userId === currentUserId) ? '' : 'outline'} icon`}></i> {content.likes.length}</span>
                    <span onClick={toggleComments} style={{margin: '0 0 0 20px'}}><i className="comment outline icon"></i> {content.comments.length}</span>
                </span>
                <i className="bookmark outline icon"></i>
            </div>
        </div>
    )
}

export default Post;