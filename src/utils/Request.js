import axios from 'axios'
import {showToast} from "vant";
//创建axios的一个实例
let request = axios.create({
    baseURL: 'http://localhost:3000/',//接口统一域名
    timeout: 6000                    //设置超时
})


//------------------- 一、请求拦截器 忽略
request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//----------------- 二、响应拦截器 忽略
request.interceptors.response.use(function (response) {
    console.log(response.data)
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log('拦截器报错');

    return Promise.reject(error);
});

export default request;

