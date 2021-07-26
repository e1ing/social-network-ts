import React, {FC} from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Redirect} from 'react-router-dom';
import AddMessageForm from "./Message/AddMessageForm";

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


 /*   let addNewMessage = (values: FormMessageType) => {
        sendMessage(values.newMessageBody)
    }*/

    if (isAuth===false) return <Redirect to={'/login'}/>
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm />
            </div>

        </div>
    )
}



export default Dialogs;