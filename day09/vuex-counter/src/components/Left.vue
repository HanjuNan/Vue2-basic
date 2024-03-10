<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button class="btn btn-primary">+1</button>
    <p>姓名: {{ $store.state.user.userInfo.name }}</p>
    <p>大写姓名: {{ $store.getters['user/upperName']}}</p>
    <button @click="changeUser" class="btn btn-primary">改名</button>

  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  methods: {
    changeUser () {
      // console.log('修改名字...')
      // 直接调用会导致所有模块同名的mutations的函数都执行
      // 因为默认情况下,所有子模块的mutation都挂在到全局了
      // 解决方案: 命名空间,可以理解为给每个子模块都起个名字,独立出来
      // 一旦开启子模块的命名空间后,调用子模块的mutations,需要加上模块名
      // 否则调用的是全局的mutations函数
      // 块名/函数名
      // this.$store.commit("模块名/函数名")
      this.$store.commit('user/updateUser', {
        name: '胡歌',
        age: 38
      })
    }
  }

}
</script>

<style>
</style>
