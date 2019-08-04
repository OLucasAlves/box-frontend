import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lucas-box-backend.herokuapp.com/',  
});

export default api;