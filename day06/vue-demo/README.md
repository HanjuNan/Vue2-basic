
# 总结
## 声明式导航
是什么? router-link本质其实是a标签
作用:
1. 可以实现跳转并自动加#
2. 实现导航高亮,会自动添加类名

导航高亮
1. router-link-active 模糊匹配
2. router-link-exact-active 精确匹配

自定义高亮类名
在创建VueRouter对象时传入配置
linkActiveClass
linkExactActiveClass

传参
1.query传参 
传递: <router-link to="/路径?参数名=参数值">
接收: $route.query.参数名
传递多个参数
2. 动态路由传参 
配置路由参数 {path: "/路径/:参数名"}
传递: <router-link :to="{path: '/路径/参数值'}">
接收: $route.params.参数名
传递一个参数,更优雅

## 重定向
作用: 访问一个路径时,强制跳转到另外一个路径
配置: {path: '/', redirect: '/路径'}

## 处理404页面
{path: '*', component: NotFoundComponent}

## 路由模式
hash模式: 路径中带#, 默认模式
history模式: 路径中不带#, 需要服务端支持

## 编程式导航
跳转方式
1. path
this.$router.push('路径')
this.$router.push({path: '路径'})

2. name
{name: '组件名',path: '路径', component: 组件}
this.$router.push({name: '组件名'})

传参
1. path
query
this.$router.push('路径?参数名=参数值')
this.$router.push({path: '路径', query: {参数名: 参数值}})

动态路由

2. name
query 
动态路由

所以传参方式只有两种:
1. query
2. 动态路由

跳转方式只有两种
name和path


