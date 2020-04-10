import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bethehero-back1.herokuapp.com/'
})

export default api;