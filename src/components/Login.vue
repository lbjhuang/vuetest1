<template >
  <div class="background">
  <div class="form">
    <el-form ref="form" :model="formData" :rules="rules"  width="100%" height="100%" label-width="80px" class="login-box">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码"  v-model="formData.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
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
      formData:{
        username: '',
        password: ''
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },

    }
  },

  methods:{
    login(){
      this.$router.push("/welcome");
      //this.$axios({
      //  url: this.GLOABALUSE.API_BASE_URL+'/user/login',
      //  method: "post",
      //  params: {username: this.username, password:this.password}
      //}).then(res => {
      //  if(res.data.code == 1){
      //    // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
      //    this.$router.push("/welcome");
      //  }else{
      //    this.$message.error('用户名或密码不对哦^_^');
      //  }
      //})
    },





    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //前端验证成功则进行后台验证后登录
          this.login();
        } else {
          //this.$message.error('用户名或密码不对哦^_^');
          return false;
        }
      });
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



.login-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 280px 500px;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
</style>