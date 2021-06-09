<template>
  <div class="home">
    <el-header><h1>蔬菜大棚管理系统</h1></el-header>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <router-link to="/home/sensor" tag="h1">
            <el-menu-item index="1">传感器管理</el-menu-item>
          </router-link>
          <el-menu-item v-if="isAdmin" index="2">
            <router-link to="/home/user" tag="h1"> 用户管理 </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>退出登录{{ isAdmin }}</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ username }}</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      isAdmin: this.$route.query.isAdmin === "true",
      username: this.$route.query.username,
    };
  },

  components: {},
};
</script>
