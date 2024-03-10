// 子模块同样也具备四个核心成员
// state、mutations、actions、getters
// 需要向外导出默认导出一个对象,包含上面四个成员
const state = {
  userInfo: {
    name: 'zs',
    age: 18
  }
}

const mutations = {
  updateUser (state, user) {
    console.log('我是user模块的updateUser')
    state.userInfo = user
  }
}

const actions = {
  updateUserAsync (context, user) {
    setTimeout(() => {
      context.commit('updateUser', user)
    }, 1000)
  }
}

const getters = {
  // 将姓名转为全大写
  upperName (state) {
    return state.userInfo.name.toUpperCase()
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
