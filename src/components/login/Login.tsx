import React from 'react';
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    return <div>
        <h1></h1>
        <LoginForm />
    </div>
}




//const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export default connect( )(Login);

