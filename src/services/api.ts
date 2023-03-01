import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-reddit-com.translate.goog/r/',
});

export default api;
