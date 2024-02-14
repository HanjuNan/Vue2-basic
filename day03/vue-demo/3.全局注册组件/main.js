import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 引入需要全局注册的组件
import HmButton from './components/hm-button.vue'
console.log("HmButton = ",HmButton);
// 注册为全局组件
Vue.component("HmButton", HmButton)
// 根据App组件实例,创建VNode
const app = new Vue({
  // render函数: 根据App实例,来创建DOM元素,挂载到指定容器
  render: h => {
    return h(App)
  },
})
// 将VNode挂载到指定容器
app.$mount('#app')
