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
        return instance.get('users',
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
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get("profile/" + userId);
    },
    getStatus(userId: number) {
        return instance.get("profile/status/" + userId);
    },
    updateStatus(status: string){
        return instance.put("profile/status", {status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    email(email: string, password: string, rememberMe=false) {
        return instance.get(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const followAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axios.get('follow',
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
        return axios.delete('follow',
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