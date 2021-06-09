<template>
  <div>
    <el-container>
      <el-header><h1>蔬菜大棚管理系统</h1></el-header>
      <el-main>
        <el-col :span="8">
          <h1></h1>
        </el-col>
        <el-col :span="8">
          <el-card>
            <h2>请登录</h2>
            <el-form label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="password" type="password"></el-input>
              </el-form-item>
              <el-form-item :inline="true" label="管理员">
                <el-switch v-model="isAdmin">gfda</el-switch>
              </el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
              <router-link to="register">
                <el-button>注册</el-button>
              </router-link>
            </el-form>
          </el-card>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      username: "",
      password: "",
      isAdmin: false,
    };
  },
  methods: {
    login() {
      var data = new FormData();
      data.append("username", this.username);
      data.append("password", this.password);
      var path = "/api/login"
      if (this.isAdmin) {
        path = "/api/admin"
      }
      axios.post(path, data).then((res) => {
        console.log(res);
        if (res.data) {
          this.$alert("登录成功", "提示", {
            confirmButtonText: "确定",
            callback: () => {
              this.$message({
                type: "success",
                message: "欢迎回来！",
              });
              this.$router.push({
                path: "/home",
                query: {
                  isAdmin: this.isAdmin,
                  username: this.username
                }
              })
            },
          });
        } else {
          this.$alert("登录失败", "提示", {
            confirmButtonText: "确定",
            callback: () => {
              this.$message.error({
                type: "failed",
                message: "请重新登录",
              });
            },
          });
        }
      });
    },
  },
};
</script>
<style>
#login {
  background-color: aquamarine;
}
</style>
