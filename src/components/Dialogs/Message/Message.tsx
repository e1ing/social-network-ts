import React from 'react'
import classes from './../Dialogs.module.css'
import {MessageType} from "../../../redux/store";

const Message: React.FC<MessageType> = (props) => {
    return <div className={classes.dialog}>{props.message}</div>
}


export default Message;