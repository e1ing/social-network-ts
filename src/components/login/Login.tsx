import React, {FC} from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";

export type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    // onSubmit: () => void
    isAuth: boolean
}

const Login: FC<LoginPropsType> = ({isAuth, login}) => {
    // const onSubmit = () => {
    //     login(formik.email, password, rememberMe)
    // }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={login}/>
    </div>
}

const mapStateToProps = (state:AppStateType): MapStateToPropsType =>({
    isAuth: state.auth.isAuth
})

type MapStateToPropsType = {
    isAuth: boolean
}

//const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export default connect(mapStateToProps, {login})(Login);

