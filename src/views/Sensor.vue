<template>
  <div>
    <h1>传感器设备</h1>

    <el-col :span="8" v-for="item in sensors" :key="item.name">
      <el-avatar
        :size="size"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>

      <h1>传感器类型</h1>
      {{ item.name }}
      <h1>当前数值</h1>
      {{ item.data }}{{ item.unit }}
      <h1>|</h1>
      <div>
        <el-button @click="showChart(item.name)">历史数据</el-button>
      </div>
    </el-col>
    <el-drawer
      title="历史数据"
      :visible.sync="drawer"
      direction="rtl"
      :before-close="handleClose"
    >
      <chart style="width: 100%; height: 100%" :option="orgOptions"></chart>
    </el-drawer>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  mounted() {
    setInterval(() => {
      axios.get("api/sensor/all").then((res) => {
        console.log(res);
        this.sensors = res.data;
      });
    }, 1000);
  },
  data() {
    return {
      drawer: false,
      sensors: {},
      history: [],
      orgOptions: {},
    };
  },
  methods: {
    showChart(name) {
      axios.get(`api/sensor/history/${name}`).then((res) => {
        this.drawer = true;
        this.history = res.data;
        console.log(this.history);
        // 绘制图表
        this.orgOptions = {
          title: { text: `${name} 的历史数据` },
          xAxis: {
            type: "category",
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              type: "line",
              data: this.history,
            },
          ],
        };
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>