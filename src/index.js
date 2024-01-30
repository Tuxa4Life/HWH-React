import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Provider } from "./Context/postsContext";
import { UserProvider } from "./Context/usersContext";

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <Provider>
        <UserProvider>
            <App />
        </UserProvider>
    </Provider>
)
