<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="editFn">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    editFn() {
      // 1.显示文本框
      // 在Vue中数据变化视图会更新,关键点: 视图的更新是异步任务
      // DOM更新是异步的
      this.isShowEdit = true
      // 2.让文本框聚焦
      this.$nextTick(() => {
        this.$refs.inp.focus()
      })
    },
  },
}
</script>

<style>
</style>