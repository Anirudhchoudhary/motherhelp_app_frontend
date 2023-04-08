import axios from "axios";

let baseURL = "http://127.0.0.1:8000"
const Annonymous_url = {
    "/api/users/": "createUser", 
    "/account/user/login": "loginUser"}


export const requests = axios.create({
    baseURL: baseURL,
    timeout: 20000,
})


export const makeRequest = {
    "createUser": "/api/users/",
    "loginUser": "/account/user/login"
}

