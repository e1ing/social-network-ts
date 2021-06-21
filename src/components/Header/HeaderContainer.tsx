import React from 'react';
import Header from "./Header";
import {InitialStateType, getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchToProps = {

}

type PropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<PropsType> {
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
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);