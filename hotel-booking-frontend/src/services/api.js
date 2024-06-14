import axios from 'axios';

const API_URL = 'https://localhost:7204/api';

const register = (userName, email, password) => {
    return axios.post(`${API_URL}/users/register`, {
        userName,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(`${API_URL}/users/login`, {
        email,
        password,
    });
};

export default {
    register,
    login,
};
