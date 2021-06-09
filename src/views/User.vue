<template>
  <div>
    <el-header>
      <h1>用户管理</h1>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  mounted() {
    axios.get("api/users").then((res) => {
      console.log(res);
      res.data.forEach((element) => {
        this.tableData.push({
          name: element,
        });
      });
    });
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    del(row) {
      var username = row.name;
      axios.delete(`api/user/${username}`).then((res) => {
        console.log(res.data);
        if (res.data) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          axios.get("api/users").then((res) => {
            console.log(res);
            this.tableData = [];
            res.data.forEach((element) => {
              this.tableData.push({
                name: element,
              });
            });
          });
        }
      });
    },
  },
};
</script>

<style>
</style>