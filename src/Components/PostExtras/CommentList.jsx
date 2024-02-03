import React from "react";

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(e => {
        return (
            <div className="comment">
                <div className="content">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="author">{e.user}</a>
                    <div className="metadata">
                        <span className="date">{e.date}</span>
                    </div>
                    <div className="text">{e.text}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="ui comments" style={{overflowY: 'scroll', maxHeight: '200px'}}>
            { renderedComments }
        </div>
    )
}

export default CommentList;