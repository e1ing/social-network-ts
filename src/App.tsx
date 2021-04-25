import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


const App: React.FC<RootStateType> = (
    {
        profilePage, dialogsPage, sidebar
    }) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={dialogsPage.dialogs}
                                                                  messages={dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={profilePage.posts}
                                                                  newPostText={profilePage.newPostText}
                                                                  addPostCallback={addPost}
                                                                  updateNewPostText={updateNewPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
