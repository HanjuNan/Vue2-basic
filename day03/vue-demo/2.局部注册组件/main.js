import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 根据App组件实例,创建VNode
const app = new Vue({
  // render函数: 根据App实例,来创建DOM元素,挂载到指定容器
  render: h => {
    return h(App)
  },
})
// 将VNode挂载到指定容器
app.$mount('#app')
