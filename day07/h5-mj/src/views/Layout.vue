<template>
  <div class="layout-page">
    <router-view></router-view>

    <van-tabbar route>
      <van-tabbar-item replace to="/article" icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item replace to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item replace to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage'

}
</script>

<style lang="less" scoped></style>
