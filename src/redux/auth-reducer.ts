let initialState = {
    id: null as null|number,
    email: null as null|string,
    login: null as null|string,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}
export const setAuthUserData = (data:AuthPropsType) => ({type: SET_USER_DATA, data} as const)


type ActionsTypes = ReturnType<typeof setAuthUserData>

export default authReducer;

//types
export type AuthPropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

export type InitialStateType = typeof initialState

const SET_USER_DATA = "SET_USER_DATA";


