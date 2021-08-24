import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SamuraiTSApp} from './App';
import reportWebVitals from './reportWebVitals';
import store, {RootReduxStateType} from './redux/redux-store';


let rerenderEntireTree = (state: RootReduxStateType) => {
    ReactDOM.render(
                <SamuraiTSApp/>,
        document.getElementById("root")
    );
}
rerenderEntireTree(store.getState())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
