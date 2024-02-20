import Vue from 'vue'
import VueRouter from 'vue-router'
import MyGoodsList from '@/views/MyGoodsList.vue'
import MyGoodsSearch from '@/views/MyGoodsSearch.vue'
import MyUserInfo from '@/views/MyUserInfo.vue'
// 安装插件
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path: '/list',
            component: MyGoodsList
        },
        {
            path: '/search',
            component: MyGoodsSearch
        },
        {
            path: '/info',
            component: MyUserInfo
        }
    ]
})

export default router