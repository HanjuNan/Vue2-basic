<template>
  <div class="app">
    <!-- 把注册好的组件当做标签使用 -->
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
  </div>
</template>

<script>
/**
 * 局部注册 / 全局注册
 * 组件的注册流程:
 *  1. 引入组件
 *  2. 注册组件
 *  3. 使用组件
 */
//1.引入组件
import HmHeader from './components/hm-header.vue';
import HmFooter from './components/hm-footer.vue';
import HmMain from './components/hm-main.vue';
export default {
  // 2.组件局部注册
  components: {
    HmHeader: HmHeader,
    HmFooter: HmFooter,
    HmMain: HmMain
  }
}
</script>

<style>
.app {
  display: flex;
  width: 350px;
  height: 500px;
  background-color: #87ceeb;
  flex-direction: column;
  justify-content: space-between;
}
</style>