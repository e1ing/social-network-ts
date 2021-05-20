import React from 'react'
import {RootStateType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps =(state:RootStateType) => {
return {
dialogsPage: state.dialogsPage
}
}
let mapDispatchToProps =() => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageAC())
        },
        sendMessage: (body: string) =>
    {
        dispatch(updateNewMessageBodyAC(body))
    }
}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;