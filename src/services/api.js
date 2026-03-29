import axios from "axios";

const API = axios.create({
  baseURL: 'https://api-peliculas-ur3s.onrender.com/api'
});

export default API;
