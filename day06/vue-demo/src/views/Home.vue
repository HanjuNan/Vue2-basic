<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="words" type="text">
      <button @click="toSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      <!-- 
        query传参: 查询字符串
        1.传递:路径?参数名 = 参数值 & 参数名2 = 参数值2...
        2.目标组件中接收参数: $route.query.参数名

        动态路由传参: 动态路由参数
        1.在router/index.js配置动态路由参数, /search/:参数名
        2.传递: /search/参数值
        3.目标组件中接收参数: $route.params.参数名

        总结: 声明式导航-跳转传参
        两种传参方式的区别:
        1.查询参数传递(适合传递多个参数)
         1.1 跳转: to="/path?参数名=参数值&参数名2=参数值2..."
         1.2 获取: $route.query.参数名
        2. 动态路由传参(优雅简介,传单个参数比较方便)
         2.1 配置动态路由: path: '/path/:参数名'
         2.2 跳转: to="/path/参数值"
         2.3 获取: $route.params.参数名
       -->
      热门搜索：
      <!-- <router-link to="/search?words=黑马程序员">黑马程序员</router-link>
      <router-link to="/search?words=前端培训">前端培训</router-link>
      <router-link to="/search?words=如何成为前端大牛">如何成为前端大牛</router-link> -->

      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
/**
 * 总结:
 * 编程式导航,如何跳转传参?
 * 总共大类有两种传参方式或者说跳转方式: path跳转和name跳转
 *  path两种: path + query 、 path + params
 *  name两种: name + query 、 name + params
 * 
 * 1.path 路径跳转
 * 1.1 query传参
 * this.$router.push('/path?参数名=参数值&参数名2=参数值2...')
 * this.$router.push({
 *  path: '/路径',
 *  query:{
 *    参数名: 参数值
 *  }
 * })
 * 1.2 动态路由传参(需要配置动态路由)
 * this.$router.push('/路径/参数值')
 * this.$router.push({
 *  path: '/路径/参数值'
 * })
 * 
 * 2. name命名路由跳转
 * 2.1 query传参
 * this.$router.push({
 *  name: '命名',
 *  query: {
 *    参数名: 参数值
 *  }
 * })
 * 
 * 2.2 动态路由传参
 *  this.$router.push({
 *    name: '命名',
 *    params: {
 *      参数名: 参数值
 *    }
 * })
 * 
 * 平时path方式用的多,除非name太长了
 * 
 * 
 */
export default {
  name: 'FindMusic',
  methods: {
    toSearch() {
      // 编程式导航: 使用js进行路由跳转
      // this.$router.push("路径") 简单写法
      // this.$router.push({path: '路径'}) 完整写法
      // 1.使用path跳转
      // this.$router.push("/search")

      //2.使用name跳转
      // 先去index.js中配置路由的name
      // this.$router.push({name: 'search'})
      // path + query 传参
      // 1.手动拼接方式
    
    // path不能加params参数对象
     this.$router.push({
        path: '/search/' + this.words,
        // params: {
        //   words: this.words
        // }
     })

    // name + query
    // 语法和path + query传参一样,只是把path换成name
    // this.$router.push({
    //   name: 'search',
    //   query: {
    //     words: this.words
    //   }
    // })

    // name + 动态路由传参
    // this.$router.push({
    //   name: 'search',
    //   params: {
    //     words: this.words
    //   }
    // })
     
    }
  },
  data() {
    return {
      words: ''
    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>