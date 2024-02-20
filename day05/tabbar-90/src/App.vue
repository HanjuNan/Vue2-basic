<template>
  <div>
    <router-view></router-view>
    <my-tab-bar></my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from "./components/MyTabBar.vue";
export default {
  components: { MyTabBar },
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
};
</script>

<style>
</style>