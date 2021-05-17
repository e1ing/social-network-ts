import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'}
    ],
        messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: "What's up"},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Crap!'},
        {id: v1(), message: 'Hi, Bro!'}
    ],
        newMessageBody: ""
}

export type DialogsPageType = typeof initialState

type ActionsTypes = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: v1(), message: body});
            return state;
        default:
            return state;
    }
}


export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageBodyAC = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: body
}) as const

export default dialogsReducer;