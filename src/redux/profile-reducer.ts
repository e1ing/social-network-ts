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
export type InitialStateType = typeof initialState

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

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    let stateCopy = {...state, posts: [...state.posts]}
    switch (action.type) {
        case "profile/ADD-POST":
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}
            state.newPostText = '';
        case "profile/UPDATE-NEW-POST-TEXT":
            return {
                ...state, newPostText: action.newText
            }
        case "profile/SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "profile/SET_STATUS":
            return {
                ...state, status: action.status
            }
        case "profile/DELETE-POST":
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostMessage: string) => ({type: "profile/ADD-POST", newPostMessage}) as const
export const updateNewPostTextAC = (text: string) => ({type: "profile/UPDATE-NEW-POST-TEXT", newText: text}) as const
export const setStatus = (status: string) => ({type: "profile/SET_STATUS", status} as const)
export const setUserProfile = (profile:ProfileType|null) => ({type: "profile/SET_USER_PROFILE", profile}as const)
export const deletePost = (postId: string) => ({type: "profile/DELETE-POST", postId}as const)

export const getUserProfile = (id: string) => async (dispatch:Dispatch) => {
   const response = await profileAPI.getProfile(id)
        console.log(response.data);
        dispatch(setUserProfile(response.data))
}

export const getStatus = (id: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(id)
            dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.updateStatus(status)
            if(response.data.resultCode===0) {
                dispatch(setStatus(status))
            }
}

export default profileReducer;


