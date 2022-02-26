import axios from 'axios';

const api = axios.create({
    baseUrl : "http://10.0.0.172:5001",
})

export default api;