import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
import Main from './views/ele/Main.vue';
// 学生查询
import StudentManage from './views/ele/StudentManage.vue';
// 添加学生信息
import AddStudent from './views/ele/AddStudent.vue';
//班级查询
import Class from './views/ele/Class.vue';
// Vue.use(Router)

import Parentscheck from './views/ele/Parentscheck.vue'
import ParentAdd from './views/ele/ParentsAdd.vue'


import AddTeacher from './views/ele/AddTeacher.vue'
import TeacherManage from './views/ele/TeacherManage.vue'

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
      }, {
        path: 'AddStudent',
        name: 'AddStudent',
        component: AddStudent
      }, {
        path: 'Class',
        name: 'Class',
        component: Class
      }, {
        // 
        path: 'Parentscheck',
        name: 'Parentscheck',
        component: Parentscheck
      },
      {
        // 
        path: 'ParentAdd',
        name: 'ParentAdd',
        component: ParentAdd
      }, {
        // 
        path: 'AddTeacher',
        name: 'AddTeacher',
        component: AddTeacher
      }, {
        // 
        path: 'TeacherManage',
        name: 'TeacherManage',
        component: TeacherManage
      }
    ]

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