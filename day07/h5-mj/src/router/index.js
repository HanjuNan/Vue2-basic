// import Register from '@/views/Register.vue'
// import Login from '@/views/Login.vue'
// import Detail from '@/views/Detail.vue'
// import Layout from '@/views/Layout.vue'
// import Article from '@/views/Article.vue'
// import User from '@/views/User.vue'
// import Collect from '@/views/Collect.vue'
// import Like from '@/views/Like.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'
import { Toast } from 'vant'

const Register = () => import('@/views/Register.vue')
// const Register = () => import('@/views/Register.vue')
// Register -> function
// console.log('Register = ', Register)
// ctrl + enter 跳到下一行
// alt + 上下 移动代码
const Login = () => import('@/views/Login.vue')
const Detail = () => import('@/views/Detail.vue')
const Layout = () => import('@/views/Layout.vue')
const Article = () => import('@/views/Article.vue')
const Collect = () => import('@/views/Collect.vue')
const Like = () => import('@/views/Like.vue')
const User = () => import('@/views/User.vue')
Vue.use(VueRouter)

// import Register from '@/views/Register.vue'
// Register -> Object
// console.log('Register = ', Register)

const routes = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/',
    component: Layout,
    redirect: '/article',
    children: [
      {
        path: '/article',
        component: Article
      },
      {
        path: '/collect',
        component: Collect
      },
      {
        path: '/like',
        component: Like
      },
      {
        path: '/user',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 白名单列表
const whiteList = ['/login', '/register', '/404']
// 导航守卫 => 全局前置守卫
router.beforeEach((to, from, next) => {
  // 执行时机: 每次页面跳转都会出发该函数
  // 只要注册了全局前置守卫,路由会立即瘫痪
  // 必须调用next()方法来放行
  // 全局前置守卫的回调函数的参数
  // 参数1: to 去哪里
  // 参数2: from 从哪里来
  // 参数3: next 放行函数
  // next("路径") 表示强制跳转到指定路径, next(false) 表示不放行

  // 1.判断是否有token
  const token = getToken()
  if (token) {
    // 1.存在token
    // 直接放行
    next()
  } else {
    // 2.不存在token
    // 判断是否在白名单
    // 如果要跳转到的路径刚好是login或者register,则放行
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 如果不是login或者register,则强制跳转到login
      Toast.fail('您还未登录,请先登录')
      next('/login')
    }
  }
})

export default router
