import {Dispatch} from "redux";
import {AuthActionsTypes, getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState
export type InitializedTypes = ReturnType<typeof initializedSuccess>



const appReducer = (state: InitialStateType = initialState, action: InitializedTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeApp = () => (dispatch: Dispatch<InitializedTypes|AuthActionsTypes>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then (() => {
        dispatch(initializedSuccess())
    });

}


export default appReducer;