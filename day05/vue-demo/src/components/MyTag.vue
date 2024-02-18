<template>
  <div class="my-tag">
    <input
      @blur="isEdit = false"
      v-focus
      v-if="isEdit"
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
    />
    <div
      @dblclick="isEdit = true" 
      class="text" v-else>
      茶壶
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    // show() {
    //   this.isEdit = true
    //   // 直接这样是获取不到的,因为DOM更新是异步的
    //   // this.$refs.inp.focus()
    //   this.$nextTick(() => {
    //     this.$refs.inp.focus()
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>