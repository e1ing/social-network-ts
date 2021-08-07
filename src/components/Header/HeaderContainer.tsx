import React, {Component} from 'react';

import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from './Header';



export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {

        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);


//types
type MapDispatchToPropsType = {
    getAuthUserData: any
    logout: () => void
}
type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}