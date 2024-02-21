<template>
    <div class="my-tab-bar">
        <a @click="activeIndex = index" :class="{current: activeIndex === index}" :href="`#${item.path}`" v-for="(item, index) in tabs" class="tab-item" :key="index">
            <!-- 图标 -->
            <span class="iconfont" :class="item.iconText"></span>
            <!-- 文字 -->
            <span>{{ item.text }}</span>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
         activeIndex: 0
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    .tab-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: transparent;
      color: black;
      text-decoration: none;
    }
    .tab-item.current {
    color: #1d7bff;
  }
  }
      

  </style>