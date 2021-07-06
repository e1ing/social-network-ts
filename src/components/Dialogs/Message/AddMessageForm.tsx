import {maxLengthCreator} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {FormDataType} from "../../login/Login";
import {useFormik} from "formik";
import {Textarea} from "../../common/FormsControls/FormsControls";
import Dialogs from "../Dialogs";

const mathLength100 = maxLengthCreator(100);
const AddMessageForm: FC<{}> = () => {
    type FormikErrorType = {
        newMessageBody?: string
    }
    const formik = useFormik({
        initialValues: {
            newMessageBody: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.newMessageBody) {
                errors.newMessageBody = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.newMessageBody)) {
                errors.newMessageBody = "Invalid email";
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
                <Textarea  formik = {formik} name={"newMessageBody"} placeholder={"enterMessage"}/>
            </div>
            <div>
                <button> Send</button>
            </div>

        </form>
    )
}

export default AddMessageForm;
