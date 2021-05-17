import React, {ChangeEvent} from 'react'
import {DialogsPageType, StoreType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from '../../StoreContext';
import {ReduxStoreType} from "../../redux/redux-store";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store: ReduxStoreType) => {
            let onSendMessageClick = () => {
            store.dispatch(sendMessageAC())
        }
            let onNewMessageChange = (body: string) => {
            store.dispatch(updateNewMessageBodyAC(body))
        }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;