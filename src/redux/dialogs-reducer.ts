import {PostType} from "./state";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE"

export const dialogsReduser = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }


    export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const

    export const updateNewMessageBodyAC = (body) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: body
    }) as const

}