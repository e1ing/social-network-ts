import React from 'react'
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;


type MapStatePropsType = {
    dialogsPage: InitialStateType //дробить?
    isAuth: boolean
}


type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}