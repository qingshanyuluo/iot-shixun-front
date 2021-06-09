import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'vue-echarts'
import 'echarts'

Vue.component('chart', ECharts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


