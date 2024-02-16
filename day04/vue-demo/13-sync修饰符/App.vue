<template>
  <div class="app">
    <button @click="openDialog">退出按钮</button>
    <!-- isShow.sync  => :isShow="isShow" @update:isShow="isShow=$event" -->
    <!-- <BaseDialog @close="isShow = $event" :visible="isShow"></BaseDialog> -->
    <!-- 
      .sync做了两件事:
      1.将数据传递给了子组件
      2.监听一个事件,事件名为update:visible
     -->
    <BaseDialog  :visible.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
/**
 * .sync修饰符
 * 作用: 可以实现子组件与父组件数据的双向绑定,简化代码
 * 特点: prop属性名,可以自定义,非固定为value
 * 
 * v-model的局限性:
 * 1.数据名必须叫value
 * 2.事件名必须叫input
 * 3.一个标签只能使用一次v-model
 * 
 * 解决v-model的局限性:
 * .sync修饰符
 * 场景: 封装弹窗类的基础组件, visible属性 true是显示 false是隐藏
 * 本质: 就是:属性名和@update属性名合写
 * 
 * 
 * 总结:
 * v-model做了两件事:
 * 1.将数据传递给子组件,数据名为value
 * 2.监听一个事件,事件名为input
 * 
 * .sync做了两件事:
 * 1.将数据传递给子组件,数据名为 visible
 * 2.监听一个事件,事件名为update:visible
 * 
 */
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openDialog() {
      this.isShow = true
    },
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>