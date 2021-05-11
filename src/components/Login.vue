<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form:{
        user_name: '',
        password: ''
      }
    }
  },

  methods:{
    login(){
      this.$axios({
        url: this.GLOABALUSE.API_BASE_URL+'/user/login',
        method: "post",
        params: {username: this.username, password:this.password}
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>