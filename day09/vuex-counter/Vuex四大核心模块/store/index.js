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
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
    },
    setCountAsync (state, count) {
      setTimeout(() => {
        state.count = count
      }, 2000)
    }
  },
  // 专门做异步任务
  actions: {
    // actions里面的函数第一个参数永远都是context对象
    // context是简化版的store对象,里面有commit方法
    setCountAsync (context, n) {
      setTimeout(() => {
        context.commit('setCount', n)
      }, 2000)
    }
  },
  // Vuex里面的计算属性
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  }
})
// 导出仓库,在main.js中挂载
export default store
