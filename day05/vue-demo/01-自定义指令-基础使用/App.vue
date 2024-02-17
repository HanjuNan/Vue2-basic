<template>
  <div >
    <h1>自定义指令</h1>
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>
// 局部注册指令

/**
 * 自定义指令: 实现自动聚焦
 */
export default {
  directives: {
    // 指令名: 配置对象
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
  // mounted() {
  //   this.$refs.inp.focus()
  // }
}
</script>

<style>

</style>