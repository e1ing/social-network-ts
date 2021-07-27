import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "b00b044a-fabf-40f0-8522-d4dd85a812f0"}
});

export const usersAPI = {
   getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => {
                return response.data
            })
    },
    follow(id:number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    unfollow(id:number){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    }
}


export const getUsers2 = (currentPage: number, pageSize: number) => {
    return axios.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data
        })
}
