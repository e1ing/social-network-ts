import { Dispatch } from "redux";
import {v1} from "uuid";
import {profileAPI, usersAPI} from "../api/api";

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
    | ReturnType<typeof setUserProfile> |ReturnType<typeof setStatus>|ReturnType<typeof deletePost>

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
        case "ADD-POST":
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}
            state.newPostText = '';
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state, newPostText: action.newText
            }
        case "SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state, status: action.status
            }
        case "DELETE-POST":
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

//action creators
export const addPostAC = (newPostMessage: string) => ({type: "ADD-POST", newPostMessage}) as const
export const updateNewPostTextAC = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text}) as const
export const setStatus = (status: string) => ({type: "SET_STATUS", status} as const)
export const setUserProfile = (profile:ProfileType|null) => ({type: "SET_USER_PROFILE", profile}as const)
export const deletePost = (postId: string) => ({type: "DELETE-POST", postId}as const)

//thunk creators
export const getUserProfile = (id: string) => (dispatch:Dispatch) => {
    profileAPI.getProfile(id).then(response => {
        console.log(response.data);
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
            if(response.data.resultCode===0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;


