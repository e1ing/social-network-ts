import React, {FC} from "react";
import {Field, InjectedFormProps} from "redux-form";
import { FormDataType } from "./Login";
import {required} from "../../utils/validators/validators";



const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={"input"} validate={[required]}/>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;