import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Detail from '@/views/Detail.vue'
import Layout from '@/views/Layout.vue'
import Article from '@/views/Article.vue'
import User from '@/views/User.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    path: '/detail',
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

// 导航守卫 => 全局前置守卫
router.beforeEach((to, from, next) => {
  // 只要注册了全局前置守卫,路由会立即瘫痪
  // 必须调用next()方法来放行
  // 全局前置守卫的回调函数的参数
  // 参数1: to 去哪里
  // 参数2: from 从哪里来
  // 参数3: next 放行函数
  // next("路径") 表示强制跳转到指定路径, next(false) 表示不放行

})

export default router
