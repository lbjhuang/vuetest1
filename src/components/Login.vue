<template>
  <div class="background">
    <el-form ref="form" :model="form_data" :rules="rules" width="100%" height="100%" label-width="80px"
             class="login-box">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form_data.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form_data.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input placeholder="请输入验证码" style="width: 180px;" v-model="form_data.code"></el-input>
        <el-image
            style="width: 100px; height: 30px; cursor:pointer; overflow: inherit; margin-left: 40px;margin-top:5px"
            :src="form_data.code_url"
            title="点击更换"
            @click="getCode()"
        >
        </el-image>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
        <el-button @click="send" type="success" :disabled="!show">
          获取验证码
          <span v-show="!show" class="count">({{ count }}s)</span>
        </el-button>
        <el-button type="primary" @click="$router.push('register')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
const TIME_COUNT = 60; //更改倒计时时间
export default {
  name: "Login",
  data() {
    return {
      show: true, // 初始启用按钮
      count: '', // 初始化次数
      form_data: {
        username: '',
        password: '',
        code: '',
        code_url: '',
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '验证码不可为空', trigger: 'blur'}
        ]
      },

    }
  },
  created: function () {
    //this.getCode()
  },
  methods: {
    getCode() {
      this.$axios({
        url: this.GLOABALUSE.API_BASE_URL + '/user/getLoginCode/scene/user_login',
        method: "get",
        params: {},
        responseType: 'blob'
      }).then(res => {
        let url = window.URL.createObjectURL(res.data)
        this.form_data.code_url = url;

      })
    },

    login() {
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

    send() {
      this.getCode()
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer); // 清除定时器
            this.timer = null;
          }
        }, 1000)
      }
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
  background-repeat: no-repeat; /*取消平铺*/
}


.login-box {
  border: 1px solid #DCDFE6;
  width: 400px !important;
  margin: 280px 200px;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.submit {
  margin-left: 39px !important;
}
</style>