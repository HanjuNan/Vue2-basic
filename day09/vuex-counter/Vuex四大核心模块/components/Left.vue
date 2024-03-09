<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>

    <p>count 值：{{ $store.state.count }}</p>
    <button @click="hClick(1)" class="btn btn-primary">+1</button>
    <button @click="hClick(5)" class="btn btn-primary">+5</button>
    <button @click="hClick(10)" class="btn btn-primary">+10</button>
    <button @click="hClickAsync" class="btn btn-primary">2s后改为666</button>
    <hr />
    <p>直接使用state里面的数据: {{ $store.state.list }}</p>
    <p>使用getters: {{ $store.getters.filterList }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  methods: {
    hClick (n) {
      // 调用mutations的函数操作
      this.$store.commit('addCount', n)
    },
    hClickAsync () {
      this.$store.dispatch('setCountAsync', 666)
    }
  }
}
</script>

<style>
</style>
