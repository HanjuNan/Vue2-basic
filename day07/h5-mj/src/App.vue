<template>
  <router-view></router-view>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      value: 3
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: yellow;
}
</style>
