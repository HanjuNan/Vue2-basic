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
    addCount (state) {
      state.count += 1
    }
  }
})
// 导出仓库,在main.js中挂载
export default store
