import { Dispatch } from "redux";
import {v1} from "uuid";
import {profileAPI, usersAPI} from "../api/api";


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

//action creators
export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const setUserProfile = (profile:ProfileType|null) => ({type: SET_USER_PROFILE, profile}as const)

//thunk creators
export const getUserProfile = (id: string) => (dispatch:Dispatch) => {
    profileAPI.getProfile(id).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (id: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resltCode===0) {
                dispatch(setStatus(response.data))
            }
        })
}

export default profileReducer;

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: {small: string, large: string}
}

export type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile> |ReturnType<typeof setStatus>