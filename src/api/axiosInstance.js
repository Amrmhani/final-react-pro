import axios from "axios";


const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASEURL,
    headers:{
        "Accept-language":"en"
    }
})

export default axiosInstance;