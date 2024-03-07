/**
 * 使用Vuex的步骤
 * 1.装包
 * 2.新建模块文件
 * 3.安装插件
 * 4.创建Vuex仓库
 * 5.导出仓库,在main.js里面导入转载
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 安装插件
Vue.use(Vuex)

// 创建仓库 new Vuex.Store()
const store = new Vuex.Store({
  // state:存放数据的位置
  state: {
    count: 100
  },
  mutations: {
    // 唯一操作state的途径
    // 用法: mutations就是一个对象,里面可以定义很多函数,在函数里面操作state
    // 所有的mutations就是一个对象,里面可以定义很多函数,在函数内操作state
    // 所有的muations函数第一个参数永远都是state
    // 第二个参数永远都是payload
    // mutations的函数只有这两个参数,如果需要携带多个参数怎么办?
    // 传对象和数组
    addCount (state, payload) {
      state.count += payload
    },
    subCount (state, payload) {
      state.count -= payload
    },
    setCount (state, n) {
      state.count = n
    }
  }
})
// 导出仓库,在main.js中挂载
export default store
