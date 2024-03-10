<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <p>姓名: {{ userInfo.name }}</p>
    <p>大写姓名: {{ upperName }}</p>
    <button class="btn btn-primary">-1</button>
    <button @click="updateUser({name: 'hanjunan'})">updateUser</button>
    <button @click="$store.dispatch('user/updateUserAsync', {name: '喊数据'})">1s后改名</button>
    <button @click="updateUserAsync({name: '阿波罗'})">updateUserAsync</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'MyRight',
  methods: {
    ...mapMutations('user', ['updateUser']),
    ...mapActions('user', ['updateUserAsync'])
  },
  computed: {
    // 如果是子模块调用,则第一个参数是模块名
    ...mapState('user', ['userInfo']),
    ...mapGetters('user', ['upperName'])
    // userInfo () {
    //   return this.$store.state.user.userInfo
    // }
  }
}
</script>

<style>
</style>
