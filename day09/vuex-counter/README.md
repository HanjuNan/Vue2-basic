# vuex-counter

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 核心概念 - state状态
目标: 明确如何给仓库提供数据,如何使用仓库的数据
1. 提供数据:
State提供唯一的公共数据源,所有共享的数据都放到Store中的
在state对象中可以添加我们需要共享的数据
区别:
1.1 data是组件自己的数据
1.2 state是所有组件共享的数据

2.使用数据
2.1 通过store直接访问
2.2 通过辅助函数(简化)
mapState是辅助函数,帮助我们把store中的数据自动映射到组件的计算属性中
正常来说是我们需要自己定义一个计算属性
computed: {
    count() {
        return this.$store.state.count
    }
}
但是如果通过mapState辅助函数我们只需要
computed: {
    ...mapState(['count'])
}
// mapState的返回值是对象 ...mapState()对对象进行解构赋值,将对应的函数取出来
// 大白话理解辅助函数: 就是vuex帮我们写好了计算属性,放到对象中返回给我们了.
// 我们之后只需要将其在computed中展开即可

# 核心概念-mutations
目标: 掌握mutations的操作流程,来修改state数据.(state数据的修改只能通过Mutation)

辅助函数 - mapMutations
目标: 掌握辅助函数mapMutations,映射方法
mapMutations和mapState很像,它是把位于mutations中的方法提取出来了,映射到组件的methods中

# 核心概念-actions
目标: 明确actions的基本用法,处理异步操作

辅助函数 - mapActions
目标: 掌握辅助函数mapActions,映射方法
mapActions是把位于actions的方法提取出来,映射到methods中

# 核心概念-getters
目标: 掌握核心概念getters的基本用法(类似于计算属性)

# 核心概念-module(进阶语法)
目标: 掌握module的基本用法(模块化)
由于vuex使用单一状态树,应用的所有状态会集中到一个比较大的对象.
当应用变的非常复杂时,store对象就有可能变得相当臃肿.

















