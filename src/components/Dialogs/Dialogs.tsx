import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";

type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void

}

const Dialogs: React.FC<PropsType> = ({dialogsPage, dispatch}) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let mess = newMessageElement.current?.value;
        alert(mess);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <button>Send</button>
            <textarea ref={newMessageElement}></textarea>


        </div>
    )
}

export default Dialogs;