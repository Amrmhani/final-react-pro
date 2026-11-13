import axios from "axios";
import { useAuthstore } from "../store/useAuthStore";

const authAxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASEURL,
    headers:{
        "Accept-language":"en"
    }
});

authAxiosInstance.interceptors.request.use((config)=>{
    const token = useAuthstore(getstate().token);
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default authAxiosInstance;