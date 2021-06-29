import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

type ProfileContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}

type ProfilePhotosType = {
    small: string,
    large: string,
}

export type ProfileType = {
    userId: number,
    aboutMe: string,
    contacts: ProfileContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    photos: ProfilePhotosType,

}

let initialState = {
    newPostText: "",
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 7},
        {id: v1(), message: "It's my second post", likesCount: 5}
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    status: ""
};

export type InitialStateType = typeof initialState
type ActionsTypes =
    ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    let stateCopy = {...state, posts: [...state.posts]}
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = "";
            return {...state, posts: [...state.posts, newPost]}

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
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

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile}) as const
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export default profileReducer;