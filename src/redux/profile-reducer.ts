import {v1} from "uuid";
import {ActionsTypes} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

let initialState = {
    newPostText: "",
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 7},
        {id: v1(), message: "It's my second post", likesCount: 5}
    ] as Array<PostType>,
};

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    let stateCopy = {...state, posts: [...state.posts]}
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}
            state.newPostText = '';
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            }
        default:
            return state;
    }
}
export const addPostAC = () => ({type: ADD_POST}) as const

export const updateNewPostTextAC = (text: string) => ({ //?поменяла на string, чтобы убрать ошибку в контейнере
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const
export default profileReducer;