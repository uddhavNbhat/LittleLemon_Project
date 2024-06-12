import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
