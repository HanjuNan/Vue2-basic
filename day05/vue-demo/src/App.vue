<template>
  <div>
    <MyDialog>
      你确定要删除么
    </MyDialog>

    <MyDialog>
    </MyDialog>
  </div>
</template>

<script>
/**
 * 如何给插槽设置默认显示内容?
 *  在slot标签内,写好默认内容
 * 什么时候插槽默认内容显示?
 *  当使用组件并未给我们传入具体标签或内容时
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