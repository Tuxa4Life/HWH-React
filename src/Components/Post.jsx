import React from "react";

const Post = ({ content }) => {
    return (
        <div class="card" style={{margin: '30px 0'}}>
            <div class="content">
                <div class="header">{content.title}</div>
                <div class="meta"> {content.subject} <br />  {content.author} · {content.date}</div>
                <div class="description">{content.text}</div>
            </div>
            <div className="extra" style={{display: 'flex', justifyContent: 'space-between', color: 'rgb(96, 96, 96)'}}>
                <span>
                    <span><i class="heart outline icon"></i> {content.likes.length}</span>
                    <span style={{margin: '0 0 0 20px'}}><i class="comment outline icon"></i> {content.comments.length}</span>
                </span>
                <i class="bookmark outline icon"></i>
            </div>
        </div>
    )
}

export default Post;