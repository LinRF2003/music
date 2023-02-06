import axios from 'axios'
import {showToast} from "vant";
//创建axios的一个实例
let request = axios.create({
    baseURL: 'http://localhost:3000/',//接口统一域名
    timeout: 6000,//设置超时
    withCredentials: true,//关键
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

// "cookie": "MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/api/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/wapi/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/neapi/feedback;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/api/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/api/clientlog;;__remember_me=true; Max-Age=1296000; Expires=Tue, 21 Feb 2023 10:08:55 GMT; Path=/;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/wapi/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/eapi/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/eapi/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/api/feedback;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/weapi/feedback;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/eapi/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/weapi/feedback;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/neapi/feedback;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/wapi/feedback;;__csrf=585cabe91326591bae683d9557913a5b; Max-Age=1296010; Expires=Tue, 21 Feb 2023 10:09:05 GMT; Path=/;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/wapi/clientlog;;MUSIC_U=d9d0165f54301d7171a09110cfe3add91a76b2fa248a2b85dea5c6e2475dad9146da82461847662b993166e004087dd375e7e350efc9448fbe17c8ebd1fd4bde778b5383cf922c22c3edb70432a2dc2d807e650dd04abd3fb8130b7ae43fcc5b; Max-Age=1296000; Expires=Tue, 21 Feb 2023 10:08:55 GMT; Path=/;;MUSIC_SNS=; Max-Age=0; Expires=Mon, 06 Feb 2023 10:08:55 GMT; Path=/;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/eapi/clientlog;;MUSIC_A_T=1675675544496; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/openapi/clientlog;;MUSIC_R_T=0; Max-Age=2147483647; Expires=Sat, 24 Feb 2091 13:23:02 GMT; Path=/neapi/clientlog;"

//------------------- 一、请求拦截器 忽略
request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//----------------- 二、响应拦截器 忽略
request.interceptors.response.use(function (response) {
    // console.log(response.data)
    if (response.data.code === 302) {
        window.location.href = '/login'
        api.refreshLogin();
    }

    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log('拦截器报错');
    console.log(error)
    return new Promise(error);
});

export default request;

