<template>
  <div class="login-page">
    <!-- 顶部navbar -->
    <van-nav-bar title="登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名必须5位以上'}
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码必须6位以上' }
          ]"
      />
      <div style="margin: 16px">
        <van-button  block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <router-link to="/register" class="link">没账号?去注册</router-link>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // 发起登录请求
      const res = await login(values)
      localStorage.setItem('hmmj-vant-h5-90-token', res.data.data.token)
      // 保存token
      // console.log('res = ', res)
      // 登录成功
      // 提示用户
      this.$toast.success('登录成功')
      // 跳转到登录页面
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
