import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
});

api.interceptors.request.use(function(config: InternalAxiosRequestConfig){
	
	console.log(config)

	return config
})

export default api;
