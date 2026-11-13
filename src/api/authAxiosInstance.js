import axios from "axios";

const authAxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASEURL,
    headers:{
        "Accept-language":"en"
    }
})



export default authAxiosInstance;