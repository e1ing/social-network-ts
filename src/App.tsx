import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import store, {ActionsTypes, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType > = ({store, dispatch}) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer store={store}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile store={store}
                                 />}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
