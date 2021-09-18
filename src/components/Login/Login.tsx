import {useFormik} from "formik";
import React, { FC } from "react";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

export const Login: FC<LoginType> = ({isAuth, login, captchaUrl}) => {

    if (isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1> Log in </h1>
        <LoginForm login={login} captchaUrl={captchaUrl} />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType =>  ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect<MapStateToPropsType, MapDispatchToPropsType , {}, AppStateType>(
    mapStateToProps, {login}
)(Login)

//types
type LoginType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string
}
type MapDispatchToPropsType = {
    login: (email:string, password: string, rememberMe: boolean) => void
}

type LoginFormType = {
    login: (email:string, password: string, rememberMe: boolean, captcha: string) => void
    captchaUrl: string
}
export const LoginForm: FC<LoginFormType> = ({login, captchaUrl}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ""
        },
        validate: (values) => {
            if (!values.email) {
                return {email: 'Email is required'}
            }
            if (!values.password) {
                return {password: 'Password is required'}
            }
        },
        onSubmit: (formData) => {
            login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        },
    });

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <input placeholder={"Email"}  {...formik.getFieldProps("email")}/>
        </div>
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
        <div>
            <input placeholder={"Password"} type={"password"} {...formik.getFieldProps("password")}/>
        </div>
        {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div>: null}
        <div>
            <input type={"checkbox"}  checked={formik.values.rememberMe}
                   {...formik.getFieldProps("rememberMe")}/> remember me
        </div>
       <img src={captchaUrl} {...formik.getFieldProps("captchaUrl")}/>
        <input  placeholder={"Captcha"} type={"captcha"} {...formik.getFieldProps("captcha")}/>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}