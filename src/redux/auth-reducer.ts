
const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
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
                ...action.data
            }

        default:
            return state;
    }
}
export const setAuthUserData = (data: InitialStateType) => ({type: SET_USER_DATA, data}) as const


export default authReducer;