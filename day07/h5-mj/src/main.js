import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/vant-ui'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// 引入需要全局注册的组件 ArticleItem
import ArticleItem from '@/components/ArticleItem.vue'
Vue.config.productionTip = false
// 全自动解决ESLint的错误

// Vue.use(Vant)

// 注册全局组件
Vue.component('ArticleItem', ArticleItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
