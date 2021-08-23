import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {getAuthUserData} from "./redux/auth-reducer";


class App extends Component <AppType> {
    componentDidMount() {
     this.props.initializeApp();
    }


    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

const mupStateToProps = (state: AppStateType):MapStateToPropsType => ({
    initialized: state.app.initialized
})
export default compose(withRouter,
    connect(mupStateToProps, {initializeApp, getAuthUserData}))(App);

//types
type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    initializeApp: () => void
}
type AppType = MapStateToPropsType & MapDispatchToPropsType