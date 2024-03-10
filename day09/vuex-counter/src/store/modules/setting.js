// 子模块同样也具备四个核心成员
// state、mutations、actions、getters
// 需要向外导出默认导出一个对象,包含上面四个成员
const state = {
  theme: 'dark',
  desc: '项目的描述信息'
}

const mutations = {
  updateUser () {
    console.log('我是setting模块的updateUser')
  }
}

const actions = {

}

const getters = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
