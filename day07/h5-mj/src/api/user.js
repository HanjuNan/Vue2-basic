import request from '@/utils/request'

export const register = (data) => {
  return request.post('/user/register', data)
}

export const login = (data) => {
  return request.post('/user/login', data)
}
// 获取用户信息
export const getUserInfo = () => {
  return request('/user/currentUser')
}
