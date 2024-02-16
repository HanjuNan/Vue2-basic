<template>
   <!-- 输入框 -->
   <header class="header">
      <h1>小黑记事本</h1>
      <input @keydown.enter="hAdd" v-model.trim="taskname" placeholder="请输入任务" class="new-todo" />
      <button @click="hAdd" class="add">添加任务</button>
    </header>
</template>

<script>
export default {
    data() {
        return {
            taskname: ''
        }
    },
    methods: {
        hAdd() {
            // 输入框都需要非空校验,记住！！！
            // if (!taskname) return alert("任务不能为空")
            // 将taskname传递给父组件 App.vue
            console.log("子组件hAdd..");
            this.$emit("add", this.taskname)
            this.taskname = ""
        }
    }
}
</script>

<style>

</style>