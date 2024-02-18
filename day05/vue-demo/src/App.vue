<template>
  <div>
    <MyDialog>
      <template v-slot:header>
        <h3>友情提示</h3>
      </template>
      <!-- v-slot:可以简写为# -->
      <!-- <template v-slot:body>
        你确定要删除么
      </template> -->
      <template #body>
        你确定要删除么
      </template>
      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
/**
 * 具名插槽:
 * 当子组件内有多个地方需要自定义结构时,可以添加多个slot标签
 * 需要给每个slot标签设置name属性
 * 1.给每个slot标签设置name属性
 * 2.使用插槽时通过template标签结合v-slot指令来设置要分发的插槽
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