<template>
  <div class="hm-main">
    Hm-Main
    <hm-button></hm-button>
  </div>
</template>

<script>
import hmButton from './hm-button.vue'
export default {
  components: { hmButton },

}
</script>

<style>
.hm-main {
    height: 320px;
    line-height: 320px;
    color: white;
    font-size: 30px;
    text-align: center;
    background-color: #f79646;
}
</style>