import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {authAPI, securityAPI} from "../api/api";
import {AppStateType} from "./redux-store";

//types
export type InitialStateType = typeof initialState
export type AuthPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
    captchaUrl: string
}
type AuthActionsTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCapthaUrl>
type LoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

let initialState: AuthPropsType = {
    id: 1,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {

    switch (action.type) {
        case "auth/SET_USER_DATA":
        case "auth/GET_CAPTCHA_URL":
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: "auth/SET_USER_DATA", payload: {id, email, login, isAuth}
} as const)

export const getCapthaUrl = (captchaUrl: string) => ({type: "auth/GET_CAPTCHA_URL", payload: {captchaUrl}} as const)

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
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptha);
        }
    }
}

export const getCaptha = () => async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsTypes>) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCapthaUrl(response.data.url))
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(-1, "", "", false))
    }
}

export default authReducer;


