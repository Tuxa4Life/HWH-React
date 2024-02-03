import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const Comments = ({ post }) => {
    return (
        <div className="extra comments" style={{width: '100%', maxHeight: '300px', backgroundColor: 'whitesmoke'}}>
            <CommentList comments={post.comments}/>
            <CommentInput postId={post.id} />
        </div>
    )
}

export default Comments;