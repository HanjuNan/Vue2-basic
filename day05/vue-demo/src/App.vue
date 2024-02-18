<template>
  <div>
    <MyTable :data="list">
      <template v-slot:default="obj">
        <!-- 接收到的数据: {{ obj }} -->
        <button @click="del(obj.item.id)">删除</button>
      </template>
    </MyTable>
    
    <MyTable :data="list2">
      <template #default="{item}">
        <button @click="show(item)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
/**
 * 作用域插槽:
 * 在父组件中需要使用子组件数据时,可以通过插槽携带过来
 *  -就是将数据绑定在一个对象中,可以传递多个数据,都会放到一个对象中统一管理
 * 1.在子组件的slot上添加自定义属性
 * 2.在父组件中使用template 配合 v-slot 接收传递过来的数据
 * 
 * 
 * 基本使用:
 * 1.给slot标签,以添加属性的方式传值
 * <slot :id=item.id></slot>
 * 2.所有添加的属性,都会被收集到一个对象中
 * 3.在template中,通过 #插槽名="obj"接收,默认插槽为default
 * 
 */
import MyTable from './components/MyTable.vue'
export default {
  data () {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  components: {
    MyTable
  },
  methods: {
    del(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    show(item) {
      console.log("用户信息: ",item);
    }
  }
}
</script>
