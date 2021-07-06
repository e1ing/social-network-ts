import React, {FC} from "react";
import {useFormik} from "formik";
import {Input} from "../common/FormsControls/FormsControls";


const LoginForm: FC = () => {

    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Required";
                errors.password = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid login";
                errors.password = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid login";
                errors.password = "Invalid login";
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },

    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Input placeholder={"Login"} formik = {formik} name={'login'} />
                <Input placeholder={"Password"}  formik = {formik}  name={'password'} />
            </div>
            <div><Input type={"checkbox"} formik = {formik} name={'rememberMe'}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;