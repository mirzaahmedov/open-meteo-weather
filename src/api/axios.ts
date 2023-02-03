import axios from "axios";

const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
});

export default api;
