<template>
  <div>
    <div class="footer_wrap">
      <!-- 
        router-link: VueRouter提供的全局组件
        必须提供to属性
        1.会自动加#
        2.可以很方便实现导航高亮
       -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>
    <div class="top">
      <!-- 路由出口 → 匹配的组件所展示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/**
 * router-link会自动给当前导航加两个类名,有什么区别呢?
 * router-link-active 模糊匹配(用的多)
 * router-link-exact-active 精确匹配(用的少)
 */
export default {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}

.footer_wrap a.active {
  background-color: yellow;
}
</style>