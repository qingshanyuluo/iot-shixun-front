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
            <h2>注册新用户</h2>
            <el-form label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="password" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input v-model="cpassword" type="password"></el-input>
              </el-form-item>
              <el-button type="success" @click="register">注册</el-button>
              <router-link to="/">
                <el-button type="">登录</el-button>
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
      cpassword: "",
    };
  },
  methods: {
    register() {
      var data = new FormData();
      data.append("username", this.username);
      data.append("password", this.password);
      axios.post("/api/register", data).then((res) => {
        console.log(res);
        if (res.data) {
          this.$alert("注册成功", "提示", {
            confirmButtonText: "确定",
            callback: () => {
              this.$message({
                type: "success",
                message: "请登录",
              });
              this.$router.push("/");
            },
          });
        } else {
          this.$alert("注册失败", "提示", {
            confirmButtonText: "确定",
            callback: () => {
              this.$message.error({
                type: "failed",
                message: "估计是已经有这个用户名了",
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
</style>