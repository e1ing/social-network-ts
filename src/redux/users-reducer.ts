import {v1} from "uuid";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let users: Array<UserType>= []

type InitialStateType = typeof users

 type UserType = {
    id: string,
    followed: boolean,
    name: string,
    status: string,
    country: string,
    city: string
}

const usersReducer = (state: InitialStateType, action: ActionsTypes) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
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
export const follow = (id: string) => ({type: "FOLLOW", id} as const)
export const unFollow = (id: string) => ({type: "UNFOLLOW", id} as const)
export const setUsers = (users: InitialStateType) => ({type: "SET_USERS", users} as const)

type ActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unFollow>|ReturnType<typeof setUsers>

export default usersReducer;

