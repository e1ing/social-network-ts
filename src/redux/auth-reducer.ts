import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
};

/*export type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
};*/

export type InitialStateType = typeof initialState
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>


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
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {userId, email, login: email, isAuth}
}) as const

export const getAuthUserData =() => (dispatch: Dispatch<AuthActionsTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (
    email: string,
    password: string,
    rememberMe: boolean
) => (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsTypes | FormAction>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error"
                dispatch(stopSubmit("login", {_eror: message}))
            }
        });
}
export const logout =() => (dispatch: Dispatch<AuthActionsTypes>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(-1,"", "", false));
            }
        });
}

export default authReducer;