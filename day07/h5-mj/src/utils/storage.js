const KEY = 'hmmj-vant-h5-90-token'
// 该模块提供三个方法,专门用于操作Token
export const setToken = (token) => {
  localStorage.setItem(KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const delToken = () => {
  localStorage.removeItem(KEY)
}
