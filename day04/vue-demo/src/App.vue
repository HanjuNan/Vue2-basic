<template>
  <!-- 主体区域 -->
  <section id="app">
    <todo-header></todo-header>
    <todo-main :list="list"></todo-main>
    <todo-footer></todo-footer>
  </section>
</template>

<script>
/**
 * 目标1: 拆分组件
 * 目标2: 渲染数据
 *  2.1 明确数据list定义在App.vue中
 *  2.2 父向子传值, 设置自定义属性
 *  2.3 子组件使用props来接收数据(类型校验)
 *  2.4 子组件中使用v-for来渲染数据
 * 
 */
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  data () {
    return {
      list: [
        {id: 1, name: '跑步十公里'},
        {id: 2, name: '打球一整天'},
        {id: 3, name: '吃饭一公斤'}
      ]
    }
  }
}
</script>

<style>

</style>
