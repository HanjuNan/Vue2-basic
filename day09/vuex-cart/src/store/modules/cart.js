import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    updateCarts (state, list) {
      state.list = list
    },
    updateCount (state, { id, count }) {
      state.list.find(item => item.id === id).count = count
    }
  },
  actions: {
    async getCarts (context) {
    //   console.log('我要发请求获取数据...')
      const res = await axios.get('http://localhost:3000/cart')
      //   console.log('res = ', res)
      context.commit('updateCarts', res.data)
    },
    async updateCountAction (context, { id, count }) {
    //   console.log('我要改数量...', count)
      await axios.patch(`http://localhost:3000/cart/${id}`, {
        count
      })
      // 自定义mutation修改
      //   context.commit('updateCount', { id, count })
      // 方法2: 触发另外一个actions方法
      context.dispatch('getCarts')
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => {
        return sum + item.count
      }, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => {
        return sum + item.count * item.price
      }, 0)
    }
  }
}
