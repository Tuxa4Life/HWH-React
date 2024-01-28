import { useContext } from "react";
import PostsContext from "../Context/postsContext";

const usePostsContext = () => {
    return useContext(PostsContext)
} 

export default usePostsContext;