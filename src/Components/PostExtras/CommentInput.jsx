import React from "react";

const CommentInput = () => {
    return (
        <form className="ui form">
            <div class="ui action input">
                <input type="text" placeholder="Write a comment..." />
                <button class="ui icon button">
                    <i class="paper plane outline icon"></i>
                </button>
            </div>
        </form>
    )
}

export default CommentInput;