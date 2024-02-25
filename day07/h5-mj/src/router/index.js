import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Detail from '@/views/Detail.vue'
import Layout from '@/views/Layout.vue'
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
    path: '/',
    component: Layout
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
