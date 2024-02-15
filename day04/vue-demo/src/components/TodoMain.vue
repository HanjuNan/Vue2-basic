<template>
  <!-- 列表区域 -->
  <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="(item, index) in list" :key="item.id">
          <div class="view">
            <span class="index">{{ index }}.</span> <label>{{ item.name }}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>