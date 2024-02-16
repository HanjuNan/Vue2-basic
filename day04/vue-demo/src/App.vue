<template>
  <div class="app">
    <!-- <BaseSelect
      :selectId="selectId"
      @changeCity="selectId = $event"
    ></BaseSelect> -->
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
/**
 * v-model除了可以给表单元素使用外,还可以给组件使用
 * v-model的原理:
 * 1.给元素传入 :value属性
 * 2.监听元素的@input事件
 * 
 * 在子组件中:
 * export default {
  props: {
    value: String,
  },
  methods: {
    selectCity(e) {
      this.$emit('input', e.target.value)
    },
  },
}
必须用value接收props
必须用input触发事件
 */
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>