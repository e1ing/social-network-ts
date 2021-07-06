import React from 'react';
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = (props) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1></h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}




const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)


export default connect(null, {login: email})(Login);