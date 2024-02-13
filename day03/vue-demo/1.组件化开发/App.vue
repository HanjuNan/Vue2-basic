<template>
  <div class="father" @click="open">
    大盒子
    <div class="son">小盒子</div>
  </div>
</template>

<script>
// 组件中的js,默认导出一个对象
// 这个对象就是组件对象
export default {
  methods: {
    open() {
      alert("你好啊")
    }
  }
}

</script>

<style lang="less">
.father {
  width: 400px;
  height: 400px;
  background-color: orange;

  .son {
  width: 200px;
  height: 200px;
  background-color: green;
}
}


</style>


