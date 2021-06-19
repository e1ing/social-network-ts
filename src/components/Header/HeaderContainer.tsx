import React from 'react';
import Header from "./Header";
import axios from "axios";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

type HeaderComponentsType = {
    setAuthUserData: (data: InitialStateType) => void
}

class HeaderContainer extends React.Component<HeaderComponentsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true //object with request settings, credentials=true means
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(response.data.data.login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    isAuth: state.auth.isAuth
    login: state.auth.login
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);