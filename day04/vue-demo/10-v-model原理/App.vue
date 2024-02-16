<template>
  <div class="app">
    <input type="text" v-model="msg1" />
    <input type="text" :value="msg2" @input="hInput"/>
    <br />
  </div>
</template>

<script>
export default {
  /**
   * v-model 本质上是一个语法糖,它内部实现了两个功能:
   *  1.使用了v-bind绑定了value属性
   *  2.使用v-on监听input事件,将最新的value赋值给变量
   * 
   */
  data() {
    return {
      msg1: '',
      msg2: '',
    }
  },
  methods: {
    hInput(e) {
      console.log("e = ",e.target.value);
      this.msg2 = e.target.value
    }
  }
}
</script>

<style>
</style>