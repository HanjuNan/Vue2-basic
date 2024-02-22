import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFind from "@/views/NotFind"
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // path: 匹配用户访问的路径
    // redirect: 重定向到指定的路径
    { path: '/', redirect: '/home'},
    { path: '/home', component: Home },
    { path: '/search/:words?', component: Search },
    { path: '*', component: NotFind }
  ]
})

export default router