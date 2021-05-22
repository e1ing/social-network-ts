import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
/*type PropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}*/
type propsType = {

}

const Dialogs: React.FC<DialogsPropsType> = ({
                                          updateNewMessageBody,
                                          sendMessage,
                                          dialogsPage
                                      }) => {

    // let state_=state.dialogsPage;

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        let mess = newMessageElement.current?.value;
        alert(mess);
    }
    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        sendMessage();
    }
    let onNewMessageChange =  (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                        <div>
                            <div>
                                <textarea value={newMessageBody}
                                          onChange={onNewMessageChange}
                                          placeholder="Enter message">
                            </textarea>
                            </div>

                            <div>
                                <button onClick={onSendMessageClick}> Send</button>
                            </div>
                        </div>

                    </div>
                    <button>Send</button>
                    <textarea ref={newMessageElement}></textarea>

                </div>
                )
                }

                export default Dialogs;