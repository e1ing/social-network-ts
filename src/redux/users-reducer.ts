
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

export type PhotosType = {
    large: string|null
    small: string|null
}

export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: {
        city: string,
        country: string
    }
}

const initialState = {
    users: [ ] as Array<UserType>,
};

export type InitialStateType = typeof initialState
type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |ReturnType<typeof setUsersAC>

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
           return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id===action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id===action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
                return state;
    }
}
export const followAC = (userId: string) => ({type: FOLLOW, userId: userId}) as const
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId: userId}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users}) as const

export default usersReducer;