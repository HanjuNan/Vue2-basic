<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr>

    <p>count 值：{{ count }}</p>
    <button @click="hClick(1)" class="btn btn-warning">-1</button>
    <button @click="hClick(5)" class="btn btn-warning">-5</button>
    <button @click="hClick(10)" class="btn btn-warning">-10</button>
    <button @click="setCountAsync(999)" class="btn btn-warning">2s后修改成999</button>
    <p>list getters: {{ filterList }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
// console.log('mapState = ', mapState(['count']))
// mapState的返回值是对象 ...mapState()对对象进行解构赋值,将对应的函数取出来
// 大白话理解辅助函数: 就是vuex帮我们写好了计算属性,放到对象中返回给我们了.
// 我们之后只需要将其在computed中展开即可
export default {
  name: 'MyRight',
  computed: {
    // count () {
    //   return this.$store.state.count
    // }
    // mapState是一个函数
    ...mapState(['count']),
    ...mapGetters(['filterList'])
  },
  methods: {

    hClick (n) {
      // this.$store.commit('subCount', n)
      this.subCount(n)
    },
    ...mapMutations(['subCount']),
    ...mapActions(['setCountAsync'])
  }
}
</script>

<style>
</style>
