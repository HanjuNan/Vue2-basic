<template>
  <div class="h5-wrapper">
    <!-- 组件缓存 -->
    <!-- 组件缓存: 在切换组件的router-view处包裹一个标签: <keep-alive></keep-alive> 
          所有在keep-alive组件内切换的组件,都会被缓存起来,不会销毁
          组件缓存虽好,但不是所有组件都需要缓存的,以我们现在案例为例: Layout组件需要缓存
          但是ArticleDetail不需要缓存
          所以,组件提供选择缓存组件的属性"
          include(包含): 填写组件名数组,如果设置该属性,则表示只缓存设置的组件
          exclude(排除): 填写组件名数组，如果设置该属性,则表示不缓存设置的组件 
          include和exclude只会设置一个

    -->
    <keep-alive include="['LayoutPage']">
      <router-view></router-view>
    </keep-alive>
    
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
 * 总结:
 * 1.keep-alive是什么
 * Vue的内置组件,包裹动态组件(router-view)时,可以缓存
 * 2. keep-alive的优点
 *  组件切换过程中把切换出去的组件保留在内容中(提升性能)
 * 3. keep-alive的三个属性
 *  3.1 include: 仅缓存include中的组件
 *  3.2 exclude: 不缓存exclude中的组件
 *  3.3 max: 缓存的最大数量
 * 4.keep-alive的使用会触发两个生命周期函数
 *   1. activated
 *   2. deactivated
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