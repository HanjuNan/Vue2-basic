<template>
  <div class="search">
    <p>搜索关键字(query): {{ $route.query.words }}</p>
    <p>搜索关键字(params): {{ $route.params.words }}</p>

    <p>搜索结果: </p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyFriend',
  created() {
    console.log(this.$route.query.words);
  }
}
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>