
import {getAuthUserData, setAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return{
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

//action creator
export const initializedSuccess = () => ({type: SET_INITIALIZED} as const)

//thunk creator
export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
dispatch(getAuthUserData())
    .then(()=> {
        dispatch(initializedSuccess())
    })
}

//types
const SET_INITIALIZED ="SET_INITIALIZED"
export type InitialStateType = typeof initialState
type ActionsTypes = ReturnType<typeof initializedSuccess>|ReturnType<typeof setAuthUserData>