import { useFormik } from "formik";
import React from "react";


export const Login = ({}) => {
    return <div>
        <h1> Log in </h1>
        <LoginForm/>
    </div>
}

export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            if (!values.login) {
                return {login: 'Email is required'}
            }
            if (!values.password) {
                return {password: 'Password is required'}
            }
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <input placeholder={"Login"}  {...formik.getFieldProps("login")}/>

        </div>
        {formik.errors.login && formik.touched.login ? <div>{formik.errors.login}</div> : null}
        <div>
            <input placeholder={"Password"}  {...formik.getFieldProps("password")}/>
        </div>
        {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div>: null}
        <div>
            <input type={"checkbox"}  checked={formik.values.rememberMe}
                   {...formik.getFieldProps("rememberMe")}/> remember me
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}
