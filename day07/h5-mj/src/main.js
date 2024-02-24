import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 全自动解决ESLint的错误

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
