import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const register = (email, password) => {
    return axios.post(API_URL, { email, password });
};

export const login = (email, password) => {
    return axios.get(`${API_URL}?email=${email}&password=${password}`);
};

export const logout = () => {
    localStorage.removeItem('token');
};