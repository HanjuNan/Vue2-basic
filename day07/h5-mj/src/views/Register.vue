<template>
  <div class="register-page">
    <!-- 顶部navbar -->
    <van-nav-bar title="注册" />
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
        <van-button  block type="primary" native-type="submit"
          >注册</van-button
        >
      </div>
      <router-link to="/login" class="link">已有账号?去登录</router-link>
    </van-form>
  </div>
</template>

<script>
// import request from '@/utils/request'
import { register } from '@/api/user'
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      await register(values)
      // console.log('res = ', res)
      // 注册成功
      // 提示用户
      this.$toast.success('注册成功')
      // 跳转到登录页面
      this.$router.push('/login')
      // console.log('submit', values)
      // const res = await request.post('/user/register', values)
      // console.log('res = ', res)
      // try {
      //   await register(values)
      //   // console.log('res = ', res)
      //   // 注册成功
      //   // 提示用户
      //   this.$toast.success('注册成功')
      //   // 跳转到登录页面
      //   this.$router.push('/login')
      // } catch (err) {
      //   // 注册失败
      //   // 提示用户注册失败
      //   this.$toast.fail(err.response.data.message)
      // }
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
