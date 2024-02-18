<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
/**
 * 总结:
 * 1.通过指令的值相关语法,可以应对更复杂指令封装的场景
 * 2.指令值得语法:
 *  2.1 v-指令名 = "指令值",通过等号可以绑定指令的值
 *  2.2 通过binding.value可以拿到指令的值
 *  2.3 通过update钩子,可以监听指令值得变化,进行DOM更新操作
 * 
 */
export default {
  // 注册局部指令
  directives: {
    color: {
      // 参数1: 指令绑定的元素对象
      // 参数2: 指令相关的值
      // inserted: 会在元素插入到DOM时执行
      // update: 会在指令的值更新时自动执行
      inserted(el, binding) {
        // console.log("el = ",el);
        // console.log("binding = ",binding);
        el.style.color = binding.value
      },
      update(el, binding) {
        console.log("update el = ",el);
        console.log("update binding = ",binding);
        el.style.color = binding.value
      }
    }
  },
  data () {
    return {
      color1: 'red',
      color2: 'orange'
    }
  },
}
</script>

<style>

</style>