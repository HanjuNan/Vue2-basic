<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>

    <p>count 值：{{ $store.state.count }}</p>
    <button @click="hClick" class="btn btn-primary">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  methods: {
    hClick () {
      // 调用mutations的函数操作
      this.$store.commit('addCount')
    }
  }
}
</script>

<style>
</style>
