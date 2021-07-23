import {v1} from "uuid";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState: InitialStateType = {
    users: []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{
                ...state, users: [...state.users, action.users]
        }
        default:
            return state;
    }
}
export const followAC = (userId: string) => ({type: "FOLLOW", userId} as const)
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)

type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>|ReturnType<typeof setUsersAC>

export default usersReducer;

//types
export type UserType = {
    id: string,
    photoUrl: string
    followed: boolean,
    name: string,
    status: string,
    location: {country: string, city: string}
}

export type InitialStateType = {
    users: Array<UserType>
}