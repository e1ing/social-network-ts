import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    email: 'samurai',
    isAuth: false
};

export type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
};

/*export type InitialStateType = typeof initialState*/
export type ActionsTypes = ReturnType<typeof setAuthUserData>


const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state;
    }
}
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => ({type: SET_USER_DATA, payload: {userId, email, login: email, isAuth}}) as const

export const getAuthUserData =() => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login =(email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.email(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        });
}
export const logout =() => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;