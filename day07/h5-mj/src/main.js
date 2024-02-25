import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
// 全自动解决ESLint的错误

Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
