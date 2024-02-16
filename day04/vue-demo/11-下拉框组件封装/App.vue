<template>
  <div class="app">
    <BaseSelect @changeCity="hChange" :cityId="selectId"></BaseSelect>
    <BaseSelect @changeCity="hChange" :cityId="selectId"></BaseSelect>
  </div>
</template>

<script>
/**
 * 下拉选择框组件封装:
 * 1. 通过父传子将selectId传递给子组件
 * 2. 子组件中接收到selectId后,将slect标签的value值绑定
 * 3. 子组件监听select的change事件,当用户选择其他选项时,将id传递给父组件
 * 4. 父组件接收到id后,存入selectId中
 * 
 */
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  methods: {
    hChange(val) {
      this.selectId = val
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>