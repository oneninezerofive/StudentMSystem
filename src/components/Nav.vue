<template>
  <el-col :span="12" width="100%">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#273341" text-color="#fff" active-text-color="#ffd04b" router>
      <el-submenu index="1">
        <template slot="title">
          <span>学生管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">添加学生</el-menu-item>
          <el-menu-item index="StudentManage">查询学生信息</el-menu-item>
          <el-menu-item index="1-3">班级查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <span>教师管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">添加教师</el-menu-item>
          <el-menu-item index="2-2">查询教师信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <span>学生成绩管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">成绩查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <span>家长信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="ParentAdd">学生家长信息添加</el-menu-item>
          <el-menu-item index="Parentscheck">学生家长信息查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</template>


<script>
export default {
  data() {
    return {
      key: "",
      keyPath: ""
    };
  },
  methods: {
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose() {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-col-12 {
  width: 200px;
  border-top: 1px solid #e7e2ee;
}
.el-menu-item {
  font-size: 12px;
}
</style>

