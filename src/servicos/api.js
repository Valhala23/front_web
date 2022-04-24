import axios from 'axios';

const api = axios.create({
    baseUrl : "http://45.191.187.35:3055",
})

export default api;