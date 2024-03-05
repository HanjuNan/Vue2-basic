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
