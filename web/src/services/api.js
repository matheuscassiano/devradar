import axios from 'axios';

const api = axios.create({
    baseURL: 'https://devradar-back.herokuapp.com',
});

export default api;