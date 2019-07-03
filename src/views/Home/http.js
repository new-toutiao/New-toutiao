import axios from "axios"

//重新创建一个axios
const http = axios.create({
    //设置请求超时的时间
    timeout: 5000,
    //设置允许携带cookie
    withCredentials: true
})

//请求时候的拦截器
http.interceptors.request.use((config) => {

    //当get请求的时候
    if (config.method == "get") {

        //将data中的数据解构给params
        config.params = { ...config.data }

        //当post请求的时候设置数据的类型
    } else if (config.method == "post") {
        config.headers = { "content-type": "application/x-www-form-urlencoded" }
    }


    //将config返回
    return config;

}, (err) => {
    console.log(err)
})

//响应时的请求
http.interceptors.response.use((res) => {
    //当状态为200的时候
    if (res.status == 200) {
        //将服务器的数据进行返回
        return res.data;
    }
})

//将aixos进行二次封装简化代码的复杂度
export default (method, url, data = {}) => {
    if (method == "get") {

        return http.get(url, {
            params: data
        })
    } else if (method == "post") {
        return http.post(url, data)
    }
}