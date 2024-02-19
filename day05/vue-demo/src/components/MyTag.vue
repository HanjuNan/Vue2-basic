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
      :value="value"
      @keydown.enter="confirm"
    />
    <div
      @dblclick="isEdit = true" 
      class="text" v-else>
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
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
   confirm(e) {
    this.$emit('input', e.target.value)
    this.isEdit = false
   }
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