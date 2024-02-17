import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 全局注册指令
// Vue.directive('指令名', 配置对象)
// Vue.directive('focus', {
//   // 这个方法会在当前指令绑定的元素被插入到DOM上时自动执行
//    // 1.指令一定会用到标签上,所以必然有绑定的标签
//    // 2.绑定的标签元素被渲染到DOM时会自动触发这个函数的执行
//    // 这类函数我们都叫它: 钩子函数
//    // 参数1: 被绑定的元素对象 真实的DOM对象
//    // 封装自定义指令,指令中自动帮我们聚焦
//    // 自定义指令也是一种封装思想的体现,将一段DOM操作封装到自定义指令中
//  inserted(el) {
//   //  console.log("el被渲染到页面 = ",el);
//   el.focus()
//  }
// })
new Vue({
  render: h => h(App),
}).$mount('#app')
