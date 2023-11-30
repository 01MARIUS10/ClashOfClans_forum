import axios from "axios";
const axiosInstance = axios.create();

console.log(process.env.VITE_CLASH_OF_CLAN_TOKEN)
axiosInstance.interceptors.request.use(
    (config) => {
        let auth = `Bearer ${process.env.VITE_CLASH_OF_CLAN_TOKEN}`
        config.headers['Authorization'] = auth;
        return config; 
    },
    (error) =>  {
        return Promise.reject(error);
    }
);

export default axiosInstance;
