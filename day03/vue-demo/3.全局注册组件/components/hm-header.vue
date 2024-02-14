<template>
  <div class="hm-header">
    Hm-Header
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
.hm-header {
    height: 80px;
    line-height: 80px;
    color: white;
    font-size: 30px;
    text-align: center;
    background-color: #8064a2;
}
</style>