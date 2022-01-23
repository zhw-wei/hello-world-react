import axios from 'axios';

//读取环境变量
const baseUrl = process.env.REACT_APP_URL

//https://juejin.cn/post/7029597221070831623

const request = axios.create({ 
    baseURL: baseUrl,
    timeout: 5000
})

//设置请求拦截器
request.interceptors.request.use(config => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.headers={
        "Content-Type": "application/json"
    }

    return config;
}, error => {
    Promise.reject(error)
})

//设置响应拦截器

export {request}