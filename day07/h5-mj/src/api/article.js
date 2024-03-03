/**
 *面经列表
 目标: 封装接口 - 获取文章列表数据
 说明: 目前文章列表是有的,但是数据是写死的,需要请求真实的文章列表数据回来
 步骤:
 1.阅读接口文档,在api/article.js封装接口函数
 2.页面调用,请求测试
 3.发现401错误,需要请求头headers中,携带token
 *
 */

import request from '@/utils/request'

export const getArticles = (params) => {
  return request.get('/interview/query', { params })
}

export const getArticleDetail = (id) => {
  return request.get('/interview/show', { params: { id } })
}

export const updateLike = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 1 // 喜欢
  })
}

export const updateCollect = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 2 // 收藏
  })
}

// 获取我的收藏
export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 2 // 表示收藏
    }
  })
}

// 获取我的喜欢
export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 1 // 表示喜欢
    }
  })
}
