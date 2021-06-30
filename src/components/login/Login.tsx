import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1></h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={"input"}/>
                <Field
                    placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)


export default Login;