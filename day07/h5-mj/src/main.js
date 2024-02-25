import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vant from 'vant'
// import 'vant/lib/index.css'
import { Button, Rate, NavBar } from 'vant'

Vue.use(NavBar)
Vue.use(Button)

Vue.use(Rate)
Vue.config.productionTip = false
// 全自动解决ESLint的错误

// Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
