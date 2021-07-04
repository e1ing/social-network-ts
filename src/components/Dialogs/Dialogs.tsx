import React, {FC} from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Redirect} from 'react-router-dom';
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {FormDataType} from "../login/Login";
import {useFormik} from "formik";

type DialogsPropsType = {
    sendMessage: (body: string) => void
    dialogsPage: InitialStateType
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 sendMessage,
                                                 dialogsPage,
                                                 isAuth,
                                             }) => {

    // let state_=state.dialogsPage;

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)


    let addNewMessage = (values: FormMessageType) => {
        sendMessage(values.newMessageBody)
    }

    if (isAuth===false) return <Redirect to={'/login'}/>
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}



const mathLength100 = maxLengthCreator(100);
const AddMessageForm: FC<FormDataType> = () => {
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
                errors.newMessageBody = "Invalid login";
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

const AddMessageFormRedux = reduxForm<FormMessageType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;