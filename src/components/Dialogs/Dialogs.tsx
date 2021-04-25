import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

const Dialogs: React.FC<DialogsPageType> = ({dialogs, messages}) => {

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

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