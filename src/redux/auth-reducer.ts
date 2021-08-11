import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import { authAPI } from "../api/api";
import {AppStateType} from "./redux-store";

let initialState:AuthPropsType = {
    id: 1,
    email:'',
    login:'',
    isAuth: false
}



const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}
//actions
export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const)

//thunk creators
export const getAuthUserData = () => (dispatch: Dispatch<AuthActionsTypes>) => {
   return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsTypes>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(-1, "", "", false))
            }
        })
}



export default authReducer;

//types
export type InitialStateType = typeof initialState
const SET_USER_DATA = "SET_USER_DATA";
export type AuthPropsType = {
    id: number ,
    email: string,
    login: string,
    isAuth: boolean
}
type AuthActionsTypes = ReturnType<typeof setAuthUserData>

type LoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

