import axios from "axios";

//types
type PhotosType = {
    small: string
    large: string
}
type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    data: {D}
}
export type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: PhotosType
}

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "b00b044a-fabf-40f0-8522-d4dd85a812f0"}
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UserType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
    },
    unfollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
    getProfile(id: string) {
        console.warn("Obsolete method. Use profileAPI object")
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get<ProfileType>(`profile/` + id)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status})
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

//types
type UserAuthType = {
    id: number
    email: string
    login: string
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    // Login(data: ResponseType) {
    login(email: string, password: string, rememberMe: boolean) {
        const data = {email, password, rememberMe}
        console.log('tut', data)
        return instance.post<ResponseType<{userId:number}>>("auth/login", data);
    },
    logout() {
        return instance.delete<ResponseType>("auth/login");
    }
}
