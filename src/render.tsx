import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./redux/state";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App profilePage={state.profilePage}
                 dialogsPage={state.dialogsPage}
                 sidebar={state.sidebar}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

