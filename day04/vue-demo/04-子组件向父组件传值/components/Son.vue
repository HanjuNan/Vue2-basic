<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <button @click="change">修改Title</button>
    我是Son组件
    父组件传递过来的属性: {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  props: ['title'],
  methods: {
    change() {
      // this.title = '你好'
      // 父组件传递过来的props,子组件无法直接修改
      this.$emit("changeTitle",' 学前端找道长')
    }
  }
}
</script>

<style>

</style>