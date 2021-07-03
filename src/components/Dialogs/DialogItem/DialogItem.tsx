import React from 'react'
import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import Message from "../Message/Message";
import {DialogType, MessageType} from "../../../redux/dialogs-reducer";

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
const DialogItem:React.FC<DialogType> = ({id, name}) => {
    let path = "/dialogs/" + id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
}


const DialogsItem :React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default DialogItem;