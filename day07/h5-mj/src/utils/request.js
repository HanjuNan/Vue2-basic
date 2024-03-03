import axios from 'axios'
import { Toast } from 'vant'
import { delToken, getToken } from '@/utils/storage'
import router from '@/router'
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
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 数据脱壳,去掉自带的data
  return response.data
}, function (error) {
  if (error.response) {
    if (error.response.status === 401) {
      // 所有的401都表示 token 有问题,只要token有问题,就需要做以下事情:
      // 1.清空token
      delToken()
      // 2.提示用户
      Toast.fail('登录已过期,请重新登录')
      // 3.跳转到登录页面
      // this.$router是组件可以使用的路由对象
      // 如果不在组件中,可以直接导入路由对象
      router.push('/login')
    } else {
      // 响应失败,出现异常情况的处理
    // 统一的错误提示,只要有错误,就会提示
      Toast.fail(error.response.data.message)
    }
  }
  return Promise.reject(error)
})

export default instance
