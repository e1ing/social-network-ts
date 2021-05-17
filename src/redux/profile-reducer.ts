import {v1} from "uuid";
import {ActionsTypes, PostType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
        newPostText: "",
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount: 12},
            {id: v1(), message: "It's my first post", likesCount: 7},
            {id: v1(), message: "It's my second post", likesCount: 5}
        ]
    };

 const profileReducer = (state=initialState, action: ActionsTypes) => {

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
export default profileReducer;