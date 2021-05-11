<template >
  <div class="background">
  <div class="form">
    <el-form ref="form" :model="form" width="100%" height="100%" label-width="80px" class="bg">
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
  </div>
  </div>

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

<style>

.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: fixed;
  top: 0px; /*这里是设置与顶部的距离*/
  left: 0px; /*这里是设置与左边的距离*/
  bottom: 0px;
  right: 0px;
  background: url("../../public/images/login2.jpg");
  background-repeat:no-repeat;  /*取消平铺*/
}

.form{
  z-index:1;
  position: absolute;
  left: 30%; top: 40%;
}
</style>