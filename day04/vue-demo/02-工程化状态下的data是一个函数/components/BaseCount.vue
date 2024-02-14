<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data() {
    console.log("data函数执行...")
    return {
      count: 0
    }
  }
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>