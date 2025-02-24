const axios = require("axios");

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:
    {'API-KEY': '13ca3025-9ff3-4db9-950f-8eb5bb52bfd3'}
})

export const usersAPI = {
    getUsers (currentPage = 1 , pageSize = 100)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)  
        .then(response => response.data)
    },

    getUnfollow (id) {
        return instance.delete(`follow/${id}`)
        .then(response => response.data)
    },

    getFollow (id) {
        return instance.post(`follow/${id}`)
        .then(response => response.data)

    },
    getProfile (userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put (`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}