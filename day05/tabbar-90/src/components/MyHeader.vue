<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    background-color: #1d7bff;
    color: white;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
</style>