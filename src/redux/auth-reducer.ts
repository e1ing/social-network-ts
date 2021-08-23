import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import { authAPI } from "../api/api";
import {AppStateType} from "./redux-store";

//types
export type InitialStateType = typeof initialState
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


let initialState:AuthPropsType = {
    id: 1,
    email:'',
    login:'',
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {

    switch (action.type) {
        case "auth/SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: "auth/SET_USER_DATA", payload: {id, email, login, isAuth}} as const)

export const getAuthUserData = () => async (dispatch: Dispatch<AuthActionsTypes>) => {
   let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsTypes>) => {
    let response = await authAPI.login(email, password, rememberMe);
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(-1, "", "", false))
            }
}

export default authReducer;


