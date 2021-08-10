import {v1} from "uuid";


const SEND_MESSAGE = "SEND-MESSAGE";




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
}

export type InitialStateType = typeof initialState
type ActionsTypes = ReturnType<typeof sendMessageAC>

 const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state;
    }
}


export const sendMessageAC = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody}) as const



//types
export type DialogType = {
    id: string
    name: string
    avatar?: string
}
export type MessageType = {
    id: string
    message: string
}

export type InitialStatType = typeof initialState

export default dialogsReducer;
