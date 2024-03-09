<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button class="btn btn-primary">+1</button>
    <p>姓名: {{ $store.state.user.userInfo.name }}</p>

  </div>
</template>

<script>
export default {
  name: 'MyLeft'

}
</script>

<style>
</style>
