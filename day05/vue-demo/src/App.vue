<template>
  <div>
    <div class="footer_wrap">
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/**
 * 1.上面是单页面应用程序?
 * 所有功能都在一个html页面山实现
 * 2.单页面应用的优缺点?
 *  优点:按需更新性能高,开发效率高,用户体验好
 *  缺点: 首屏加载慢,不利于SEO
 * 
 * 小结:
 * 1.什么是路由
 *  路由是一种映射关系
 * 2. Vue中的路由是什么?
 *  路径和组件的映射关系
 * 
 * Vue-Router的使用步骤
 * 1.下载依赖包 Vue2 -> vue-router3
 * 2.引入
 * 3.安装插件
 * 4.创建路由对象
 * 5.注入到new Vue中,建立关联
 * 
 * 路由的两个核心步骤:
 * 1.配置组件和路径的对应规则
 * 2.配置路由出口 router-view
 * 
 * 1.组件分类有哪些?分类的目的?
 *  页面组件和复用组件,便于维护
 * 2.放在上面文件夹?作用分别是什么?
 *  页面组件 - views文件夹 => 配合路由,页面展示
 *  复用组件 - components文件夹 => 封装复用
 * 
 * 路由模块的封装抽离好处是什么?
 *  拆分模块,利于维护
 */
export default {};
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
</style>