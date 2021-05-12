import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType, RootStateType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

 const profileReduser = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
           return state;
        case UPDATE_NEW_POST_TEXT:
            debugger
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


}
export const addPostAC = () => ({type: ADD_POST }) as const

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const
export default profileReduser;