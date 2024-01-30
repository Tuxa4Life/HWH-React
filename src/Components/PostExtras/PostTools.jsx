import React from "react";

const PostTools = ({ toggleEdit, toggleDelete }) => {
    return (
        <span style={{display: 'flex', position: 'absolute', top: '0px', right: '-55px', flexDirection: 'column', padding: '5px 1px 5px 5px', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5', borderRadius: '7px'}}>
            <button onClick={toggleEdit} className="ui icon secondary inverted button" style={{marginBottom: '5px'}}>
                <i className="pencil icon"></i>
            </button>
            <button onClick={toggleDelete} className="ui icon secondary inverted    button">
                <i className="trash  icon"></i>
            </button>
        </span>
    )
}

export default PostTools;