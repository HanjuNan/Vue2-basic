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
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
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
import request from '@/utils/request'
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
      // console.log('submit', values)
      const res = await request.post('/user/register', values)
      console.log('res = ', res)
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
