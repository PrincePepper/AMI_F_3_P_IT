import axios from "axios";

export const TOKEN = axios.create({
    baseURL: 'http://localhost:8000/api/v1/auth/'
})