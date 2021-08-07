import React, {Component} from 'react';
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from './Header';


class HeaderContainer extends Component<HeaderContainerPropsType> {

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

export default connect(mapStateToProps, {logout})(HeaderContainer);


//types
export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    logout: () => void
}
type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}