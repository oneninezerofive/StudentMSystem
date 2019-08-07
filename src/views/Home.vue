<template>
  <div class="students">
    <el-container>
      <el-header height="100px">
        <div class="stuLogo">
          <img src="../assets/student.png" alt />
          <span>学生信息管理系统</span>
        </div>
        <div class="admin">
          <span>欢迎Admin</span>
          <div class="adminuser">
            <img src="../assets/admin.png" alt />
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Nav />
        </el-aside>
        <!-- 路由 -->
        <router-view></router-view>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "home",
  components: {
    // HelloWorld
    Nav
  }
};
</script>




<style >
html,
body {
  height: 100%;
  width: 100%;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
}
.students {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.stuLogo {
  float: left;
  margin-left: 40px;
  margin-top: 20px;
}
.stuLogo img {
  height: 60px;
  width: 60px;
  vertical-align: middle;
}
.stuLogo span {
  margin-left: 10px;
  font-size: 26px;
  color: #fff;
  vertical-align: middle;
}
.admin {
  float: right;
  margin-top: 20px;
  margin-right: 40px;
}
.adminuser {
  float: right;
  line-height: 50px;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.adminuser img {
  height: 50px;
  width: 50px;
  vertical-align: middle;
}

.admin img {
  height: 50px;
  width: 50px;
  vertical-align: middle;
}
.admin span {
  font-size: 16px;
  vertical-align: middle;
  margin-right: 10px;
  color: #fff;
}

.el-header,
.el-footer {
  background-color: #273341;
  color: #333;
  text-align: center;
  height: 100px;
  line-height: 60px;
}

.el-aside {
  background-color: #273341;
  color: #333;
  text-align: center;
  line-height: 200px;
  /* background-color: rgb(48, 49, 51); */
}

.el-main {
  background-color: #e7e2ee;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>

