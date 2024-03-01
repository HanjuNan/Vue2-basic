import axios from 'axios'
import { Toast } from 'vant'
// 1.不方便
// 2.修改了axios这个对象,以后项目中所有用到的axios都被修改了
// 建议: 新建一个axios对象来配置
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.timeout = 5000

// 创建一个axios对象,功能和axios完全一样,但起到了隔离的作用
const instance = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

// 直接复制过来是给axios再添加拦截器
// 需要修改为instance
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {
    // 响应失败,出现异常情况的处理
    Toast.fail(error.response.data.message)
  }
  return Promise.reject(error)
})

export default instance
