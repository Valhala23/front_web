import axios from 'axios';

const api = axios.create({
    baseUrl : "http://localhost:5001",
})

export default api;