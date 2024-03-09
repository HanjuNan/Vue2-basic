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
import user from './modules/user'
import settng from './modules/setting'
// 安装插件
Vue.use(Vuex)

// 创建仓库 new Vuex.Store()
const store = new Vuex.Store({
  modules: {
    // 注册一个名为user的模块
    user,
    settng
  }
})
// 导出仓库,在main.js中挂载
export default store
