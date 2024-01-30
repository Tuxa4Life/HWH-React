import { useContext } from "react";
import UsersContext from "../Context/usersContext";

const useUsersContext = () => {
    return useContext(UsersContext)
} 

export default useUsersContext;