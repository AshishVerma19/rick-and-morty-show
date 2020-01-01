import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 1000
});

export default instance;
