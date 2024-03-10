<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <p>姓名: {{ userInfo.name }}</p>
    <button class="btn btn-primary">-1</button>
  </div>
</template>

<script>

export default {
  name: 'MyRight',
  computed: {
    userInfo () {
      return this.$store.state.user.userInfo
    }
  }
}
</script>

<style>
</style>
