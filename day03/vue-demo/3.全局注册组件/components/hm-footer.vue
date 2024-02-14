<template>
  <div class="hm-footer">
    Hm-Footer
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
.hm-footer {
    height: 80px;
    line-height: 80px;
    color: white;
    font-size: 30px;
    text-align: center;
    background-color: #4f81bd;
}
</style>