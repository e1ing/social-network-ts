import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState
export type initializedTypes = ReturnType<typeof initializedSuccess>


const appReducer = (state: InitialStateType = initialState, action: initializedTypes): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}
export const initializedSuccess = () => ({
    type: SET_INITIALIZED
}) as const

export const initializeApp = () => (dispatch: Dispatch<initializedTypes>) => {
    let promise = dispatch(getAuthUserData());
    promise.all([propmise]
        .then (() => {
        dispatch(initializedSuccess())
    });

}


export default appReducer;