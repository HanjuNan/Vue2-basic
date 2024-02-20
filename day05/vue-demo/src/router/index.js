import Vue from 'vue';
import VueRouter from 'vue-router'
import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import My from '@/views/My.vue'
// 路由的使用步骤 5 + 2
// 5个基础步骤
// 1. 下载 v3.6.5
// 2. 引入
// 3. 安装注册 Vue.use(Vue插件)
// 4. 创建路由对象
// 5. 注入到new Vue中，建立关联

// 2个核心步骤
// 1. 建组件(views目录)，配规则
// 2. 准备导航链接，配置路由出口(匹配的组件展示的位置) 
// 注册路由的全局组件: router-link router-view
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/find',
      component: Find
    },
    {
      path: '/friend',
      component: Friend
    },
    {
      path: '/my',
      component: My
    }
  ]
})


export default router