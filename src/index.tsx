import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store, {RootReduxStateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"


let rerenderEntireTree = (state: RootReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,

        /* <React.StrictMode>
             <App profilePage={store.getState().profilePage}
                  dialogsPage={store.getState().dialogsPage}
                  sidebar={store.getState().sidebar}
             />
         </React.StrictMode>,*/


        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
