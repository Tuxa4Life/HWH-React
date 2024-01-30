import React from "react";

const Post = ({ content, isOwn }) => {

    return (
        <div className="card" style={{margin: '30px 0 0 0', position: 'relative'}}>

            <i style={{display: `${isOwn ? 'block' : 'none'}`, position: 'absolute', top: '10px', right: '10px'}} className="ellipsis horizontal icon"></i>

            <div className="content">
                <div className="header">{content.title}</div>
                <div className="meta"> {content.subject} <br />  {content.author} · {content.date}</div>
                <div className="description">{content.text}</div>
            </div>
            <div className="extra" style={{display: 'flex', justifyContent: 'space-between', color: 'rgb(96, 96, 96)'}}>
                <span>
                    <span><i className="heart outline icon"></i> {content.likes.length}</span>
                    <span style={{margin: '0 0 0 20px'}}><i className="comment outline icon"></i> {content.comments.length}</span>
                </span>
                <i className="bookmark outline icon"></i>
            </div>
        </div>
    )
}

export default Post;