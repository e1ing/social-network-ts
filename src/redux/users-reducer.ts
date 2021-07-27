import { Dispatch } from "redux";
import {usersAPI} from "../api/api";

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.id]
            :  state.followingInProgress.filter(id=>id!=action.id)
            }
        default:
            return state;
    }
}
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, id: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id} as const)


//thunk creators
export const getUsers =(currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}}


export const follow =(id: number, isFetching: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.follow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

export const unfollow =(id: number, isFetching: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

type ActionsTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export default usersReducer;

//types


export type UserType = {
    id: number,
    name: string,
    photos: {
        small: string | null,
        large: string | null
    }
    followed: boolean,
    status: string,
    location: { country: string, city: string }
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
