import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean
    email: string
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.email,
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);