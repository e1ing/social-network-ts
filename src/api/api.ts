import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b00b044a-fabf-40f0-8522-d4dd85a812f0"
    }
}) //object-instance

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersResponseType>('users',
            {
                params: {
                    page: currentPage,
                    count: pageSize
                }
            }).then(response => {
            return response.data;
        });
    },
    follow(userId: number) {
        return instance.post<FollowUnfollowResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<FollowUnfollowResponseType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>("profile/" + userId);
    },
    getStatus(userId: number) {
        return instance.get<GetProfileResponseType>("profile/status/" + userId);
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>("profile/status", {status});
    }
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<MeResponseType>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<LogoutMeResponseType>(`auth/login`)
    }
}

export const followAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axios.get<boolean>('follow',
            {
                params: {
                    page: currentPage,
                    count: pageSize
                }
            }).then(response => {
            return response.data;
        });
    }
}

export const unfollowAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axios.delete<boolean>('follow',
            {
                params: {
                    page: currentPage,
                    count: pageSize
                }
            }).then(response => {
            return response.data;
        });
    }
}

//types
export enum ResultCode {
    Success = 0,
    Error = 1,
}
type PhotosType = { small: string, large: string }

//usersAPI types
type GetUsersResponseType = {
    items: [
        {
            id: string
            name: string
            status: string
            photos: PhotosType
            followed: boolean
        }
    ],
    totalCount: number,
    error: string
}

type FollowUnfollowResponseType = {
    resultCode: ResultCode
    messages: Array<string>
    data: {}
}

//profileAPI types
type GetProfileResponseType = {
    userId: string
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: PhotosType
}
type UpdateStatusResponseType = {
    resultCode: ResultCode
    messages: Array<string>
    data: {}
}

//authAPI types
type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}
type LogoutMeResponseType = {
    resultCode: ResultCode
    data: {}
    messages: Array<string>
}
/*type LoginMeResponseType = {
    data: {
        UserId: number,
    }
    resultCode: ResultCode
    messages: Array<string>
}*/
