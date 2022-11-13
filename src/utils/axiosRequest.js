import axios from 'axios'
import {Toast} from "vant";
import i18n from "@/language";

// 创建一个axios实例
const axiosRequest = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_API_PREFIX,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept-Language": localStorage.getItem("user_lng"),
        "Content-Type": 'application/json',
    },
    timeout: 100000
})

// 请求拦截器
axiosRequest.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        Toast({message: i18n.global.t(`Global.networkError`), forbidClick: true});
        return false
    }
)

//响应拦截器
axiosRequest.interceptors.response.use(
    response => {
        if(response.data.code === 200){
            return response
        }else{
            Toast({message: response.data.msg, forbidClick: true});
            return false
        }
    },
    error => {
        console.log(error)
        Toast({message: i18n.global.t(`Global.networkError`), forbidClick: true});
        return false
    }
)
export default axiosRequest
