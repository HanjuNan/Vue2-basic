<template>
  <div class="base-one">
    BaseOne
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/** 
scoped的原理:
1.给当前组件内的所有标签添加一个自定义属性: data-v-hash值
比如:<div data-v-5f6a9d56="" class="base-one"> BaseOne </div>
2.应用选择器时会自动加上属性选择器
div[data-v-5f6a9d56] {
    border: 3px solid blue;
    margin: 30px;
}
*/
div{
  border: 3px solid blue;
  margin: 30px;
}
</style>