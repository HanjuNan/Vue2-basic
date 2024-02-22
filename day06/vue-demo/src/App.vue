<template>
  <div class="h5-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
/**
 * 分析: 配路由 + 实现功能
 * 1.配路由
 * 1.1 首页和面经详情,两个一级路由
 * 1.2 首页内嵌四个可以切换的页面(嵌套二级路由)
 * 2.实现功能
 * 2.1 首页请求渲染
 * 2.2 跳转传参到详情页,详情页渲染
 * 2.3 组件缓存,优化性能
 * 
 * 
 */
export default {
  name: 'h5-wrapper'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>