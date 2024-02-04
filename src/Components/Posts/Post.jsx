import React, { useState, useEffect } from "react";
import PostTools from "./Extras/PostTools";
import EditPost from "./Extras/EditPost";
import DeletePost from "./Extras/DeletePost";
import usePostsContext from "../../Hooks/usePostsContext";
import useUsersContext from "../../Hooks/useUsersContext";
import Comments from "./Extras/Comments";

const Post = ({ content, isOwn, currentUserId, currentBookmarks }) => { {/* I was too lazy to write good code here */}
    const { likePost } = usePostsContext()
    const { getUser, bookmarkPost } = useUsersContext()

    const [bookmarkState, setBookmarkState] = useState(false)

    const [toolsOpen, setToolsOpen] = useState(false)
    const toggleTools = () => setToolsOpen(!toolsOpen)

    const [editOpen, setEditOpen] = useState(false)
    const toggleEdit = () => setEditOpen(!editOpen)

    const [deleteOpen, setDeleteOpen] = useState(false)
    const toggleDelete = () => setDeleteOpen(!deleteOpen)

    const [commentsOpen, setCommentsOpen] = useState(false)
    const toggleComments = () => setCommentsOpen(!commentsOpen)

    const like = () => likePost(content.id, getUser(currentUserId) ? getUser(currentUserId).username : 'Guest', currentUserId)
    const bookmark = () => {
        if (currentUserId) {
            bookmarkPost(content)
            setBookmarkState(!bookmarkState )
        } else {
            alert('Guests cannot bookmark.')
        }
    }

    useEffect(() => { {/* this is quite expensive yes, but its 2 am and im too tired to find a better solution */}
        if (currentBookmarks.find(e => e.id === content.id)) setBookmarkState(true)
    }, [])

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
            <div className="extra" style={{display: 'flex', justifyContent: 'space-between', color: 'rgb(96, 96, 96)'}}>
                <span>
                    <span onClick={like}><i className={`heart ${content.likes.find((e) => e.userId === currentUserId) ? '' : 'outline'} icon`}></i> {content.likes.length}</span>
                    <span onClick={toggleComments} style={{margin: '0 0 0 20px'}}><i className="comment outline icon"></i> {content.comments.length}</span>
                </span>
                <i onClick={bookmark} className={`bookmark ${currentBookmarks.find(e => e.id === content.id) ? '' : 'outline'} icon`}></i>
            </div>

            { commentsOpen ? <Comments post={content}/> : null }
        </div>
    )
}

export default Post;