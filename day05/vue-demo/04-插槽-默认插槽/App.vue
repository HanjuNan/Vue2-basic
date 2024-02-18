<template>
  <div>
    <MyDialog>
      <!-- 给子组件传入结构 -->
      你真的要退出吗?
    </MyDialog>

    <MyDialog>
      <!-- 给子组件传入结构 -->
      用户名: <input type="text">
    </MyDialog>
  </div>
</template>

<script>
/**
 * 父向子传值只能解决数据动态变化的问题,无法解决结果自定义的问题
 * 使用插槽可以让子组件内部的结构都支持自定义
 * 插槽使用步骤:
 * 1.在子组件内,使用<slot></slot>占位
 * 2.在父组件中,使用子组件时,标签中间传入自定义结果
 * 
 * 总结:
 * 场景: 当组件内某一部分结构不确定,想要自定义怎么办?
 * 用插槽slot占位封装,从父组件将结构传入
 */
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>