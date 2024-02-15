<template>
  <!-- 主体区域 -->
  <section id="app">
    <todo-header @add="hAdd"></todo-header>
    <todo-main @del="hDel" :list="list"></todo-main>
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
 * 目标3: 添加任务
 *  3.1 在子组件(TodoHeader)中使用v-model双向绑定输入框
 *  3.2 给添加按钮绑定点击时间
 *  3.3 当用户添加时，将用户输入的内容,通过$emit子传父组件App
 *  3.4 App收到数组将数据添加到数组中
 *  3.5 最终在子组件中还需要非空校验和清空文本 
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
  },
  methods: {
    hAdd(taskname) {
      // console.log("App接收到的 taskname = ",taskname);
      this.list.unshift({id: +new Date(), name: taskname});
    },
    hDel(id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  }


}
</script>

<style>

</style>
