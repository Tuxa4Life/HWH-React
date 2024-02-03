import React from "react";
import CommentInput from "./CommentInput";

const Comments = () => {
    return (
        <div className="extra comments" style={{width: '100%', maxHeight: '200px', backgroundColor: 'whitesmoke'}}>
            <CommentInput />
        </div>
    )
}

export default Comments;