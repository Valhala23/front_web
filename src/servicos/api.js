import axios from 'axios';

const api = axios.create({
    baseUrl : "https://localhost:44390",
})

export default api;