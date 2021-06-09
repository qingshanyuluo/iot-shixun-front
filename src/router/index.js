import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import Sensor from '../views/Sensor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'user',
        name: 'user',
        component: User
      },
      {
        path: 'sensor',
        name: 'senser',
        component: Sensor
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
