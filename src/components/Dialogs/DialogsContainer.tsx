import React, {ChangeEvent} from 'react'
import {DialogsPageType, StoreType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<PropsType> = ({store}) => {

    let state = store.getState().dialogsPage

    let onSendMessageClick = () => {
        store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
    />

}

export default DialogsContainer;