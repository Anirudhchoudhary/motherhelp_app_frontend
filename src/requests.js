import axios from "axios";

let baseURL = "http://127.0.0.1:8000"

export const requests = axios.create({
    baseURL: baseURL,
    timeout: 20000,
})


export const makeRequest = {
    "createUser": "/api/users/",
    "loginUser": "/account/user/login"
}

