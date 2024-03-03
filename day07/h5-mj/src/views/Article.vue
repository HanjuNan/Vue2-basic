<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a :class="{active: sorter === 'weight_desc'}" @click="hChange('weight_desc')">推荐</a>
      <a :class="{active: sorter === null}" @click="hChange(null)" href="javascript:;">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem :item="item" v-for="item in list" :key="item.id"></ArticleItem>
    </van-list>

  </div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'article-page',
  // async created () {
  //   const res = await getArticles({
  //     current: 1, // 当前页面
  //     pageSize: 10, // 每页获取多少条
  //     sorter: 'weight_desc'
  //   })
  //   // console.log(res)
  //   this.list = res.data.rows
  // },
  // 页面刚加载时,就是在底部,会自动触发load事件
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      current: 1,
      sorter: 'weight_desc'
    }
  },
  methods: {
    // 1. load事件在页面滑动到底部时自动触发
    // 2. 触发时会自动将Loading改为true,此时我们可以去发请求
    // 3. 请求到数据后,将loading改为false
    // 4. 拿到数据后是将数据追加到当前数组的后面,而不是直接覆盖赋值
    // 5. 让current++获取下一页数据
    // 6. 当current大于总页数时候,停止发请求,将finished改为true
    async onLoad () {
      console.log('到底了,该加载数据了..')
      const res = await getArticles({
        current: this.current, // 当前页面
        pageSize: 10, // 每页获取多少条
        sorter: this.sorter
      })
      // console.log(res)
      // this.list = res.data.rows
      this.list.push(...res.data.rows)
      // 请求完成,将loading改为false
      this.loading = false
      // 下一页
      this.current++
      // 当当前页大于总页数,则结束
      if (this.current > res.data.totalPage) {
        this.finished = true
      }
    },
    hChange (sorter) {
      console.log('切换...')
      // console.log('sorter = ', sorter)
      // 1.重置所有的数据
      this.sorter = sorter
      this.current = 1
      this.list = []
      this.finished = false
      this.loading = true
      // 2.发请求
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
