<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>

    <p>count 值：{{ $store.state.count }}</p>
    <button @click="hClick(1)" class="btn btn-primary">+1</button>
    <button @click="hClick(5)" class="btn btn-primary">+5</button>
    <button @click="hClick(10)" class="btn btn-primary">+10</button>
  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  methods: {
    hClick (n) {
      // 调用mutations的函数操作
      this.$store.commit('addCount', n)
    }
  }
}
</script>

<style>
</style>
