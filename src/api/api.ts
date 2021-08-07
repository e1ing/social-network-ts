import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "b00b044a-fabf-40f0-8522-d4dd85a812f0"}
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(id: string) {
        console.warn("Obsolete method. Use profileAPI object")
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get(`profile/` + id)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    // login(data: ResponseType) {
    login(email: string, password: string, rememberMe: boolean) {
        const data = { email, password, rememberMe }
        console.log('tut', data)
        return instance.post("auth/login", data);
    },
    logout() {
        return instance.delete("auth/login");
    }
}

//types
/*
type ResponseType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}*/
