import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers/object-helper";

type ActionsTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

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
        case "users/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, " id", {followed: true})
            }
        case "users/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, " id", {followed: false})
            }
        case "users/SET_USERS":
            return {...state, users: action.users}
        case "users/SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "users/SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "users/TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "users/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}
export const followSuccess = (userId: number) => ({type: "users/FOLLOW", userId} as const)
export const unfollowSuccess = (userId: number) => ({type: "users/UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "users/SET_USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "users/SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "users/SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "users/TOGGLE_IS_FETCHING", isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, id: number) => ({
    type: "users/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, id
} as const)

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
};
export const follow = (userId: number, isFetching: boolean) => {
    return async (dispatch: Dispatch) => {
        folllowUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId: number, isFetching: boolean) => {
    return async (dispatch: Dispatch) => {
        folllowUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}


const folllowUnfollowFlow = async (dispatch: Dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export default usersReducer;


