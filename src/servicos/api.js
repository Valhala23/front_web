import axios from 'axios';

const api = axios.create({
    baseUrl : "https://10.0.0.172:44390",
})

export default api;