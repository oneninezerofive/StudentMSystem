import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
import Main from './views/ele/Main.vue'
import StudentManage from './views/ele/StudentManage.vue'

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: 'main',
      name: 'main',
      component: Main
    }, {
      // 
      path: 'StudentManage',
      name: 'StudentManage',
      component: StudentManage
    }]
  }, {
    //重定向
    path: '/',
    redirect: () => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
      return '/home/main'
    }
  }]
})