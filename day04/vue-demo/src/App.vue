<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件 --- {{ myTitle }}
    <Son @changeTitle="change" :title="myTitle"></Son>
  </div>
</template>

<script>
/**
 * 父向子传递数据
 * 1. 在App.vue中给子组件添加自定义属性
 * 2. 在Son.vue中通过props接收自定义属性传递过来的数据
 * 
 * 子向父传递数据
 * 1. 在Son.vue中,使用$emit传递数据
 * 2. 在App.vue中,使用自定义事件来接收数据
 */
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就来黑马程序员',
    }
  },
  components: {
    Son,
  },
  methods: {
    change(val) {
      // console.log("父组件中的chaneg触发了..",val);
      this.myTitle = val;
    }
  }
}
</script>

<style>
</style>