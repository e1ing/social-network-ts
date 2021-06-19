import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "2e663c7e-754e-4005-8ebe-08de0775050a"
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
    }
}

export const followAPI = {
   getUsers(currentPage = 1, pageSize = 10){
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