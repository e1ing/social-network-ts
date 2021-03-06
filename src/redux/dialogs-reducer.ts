import {v1} from "uuid";

export type DialogType = {
    id: string
    name: string
    avatar?: string
}
export type MessageType = {
    id: string
    message: string
}
export type InitialStateType = typeof initialState
type ActionsTypes = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'}
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: "What's up"},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Crap!'},
        {id: v1(), message: 'Hi, Bro!'}
    ] as Array<MessageType>,
    newMessageBody: "" as string
}


const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case  "dialogs/UPDATE-NEW-MESSAGE-BODY":
            return {...state, newMessageBody: action.newText}
        case "dialogs/SEND-MESSAGE":
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: "dialogs/SEND-MESSAGE"}) as const
export const updateNewMessageBodyAC = (body: string) => ({type: "dialogs/UPDATE-NEW-MESSAGE-BODY",newText: body}) as const

export default dialogsReducer;
