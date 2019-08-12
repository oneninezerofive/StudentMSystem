<template>
  <!-- 合并 -->
  <!-- main部分 -->
  <el-main>
    <!-- 头部 -->
    <div class="allheader">
      <h1>学生信息管理</h1>
      <span class="mianbaoqie">/</span>
      <span>添加学生信息询</span>
    </div>

    <!-- 表单 -->
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <!-- 姓名 -->
      <el-form-item label="姓名:">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <!-- 学号 -->
      <el-form-item label="学号:">
        <el-input v-model="formLabelAlign.xuehao" placeholder="班级号+两位数字"></el-input>
      </el-form-item>
      <!-- 手机号码 -->
      <el-form-item label="手机号码:">
        <el-input v-model="formLabelAlign.tel"></el-input>
      </el-form-item>

      <!-- 性别 -->
      <el-form-item label="性别：">
        <el-select v-model="formLabelAlign.xingbie" placeholder="性别" class="xingbie">
          <el-option label="男生" value="男"></el-option>
          <el-option label="女生" value="女"></el-option>
        </el-select>
      </el-form-item>
      <!-- 家庭住址 -->
      <el-form-item label="家庭住址:">
        <el-input v-model="formLabelAlign.homeaddr"></el-input>
      </el-form-item>
      <!-- 班级 -->
      <el-form-item label="班级：">
        <el-select v-model="formLabelAlign.banji" placeholder="班级" class="xingbie">
          <el-option label="1901" value="1901"></el-option>
          <el-option label="1902" value="1902"></el-option>
          <el-option label="1903" value="1903"></el-option>
          <el-option label="1904" value="1904"></el-option>
          <el-option label="1905" value="1905"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit();openFullScreen2()">保存</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>


<script>
import { MessageBox } from "element-ui";

export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        xuehao: "",
        tel: "",
        homeaddr: "",
        xingbie: "",
        banji: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      if (
        this.formLabelAlign.name &&
        this.formLabelAlign.xuehao &&
        this.formLabelAlign.tel &&
        this.formLabelAlign.homeaddr &&
        this.formLabelAlign.xingbie &&
        this.formLabelAlign.banji
      ) {
        let data = await this.$axios("http://localhost:3000/addStudent", {
          params: {
            name: `${this.formLabelAlign.name}`,
            xuehao: `${this.formLabelAlign.xuehao}`,
            tel: `${this.formLabelAlign.tel}`,
            homeaddr: `${this.formLabelAlign.homeaddr}`,
            xingbie: `${this.formLabelAlign.xingbie}`,
            banji: `${this.formLabelAlign.banji}`
          }
        });

        let states = await data.data.result.n;
        // console.log(states);
        if (states === 1) {
          this.formLabelAlign.name = "";
          this.formLabelAlign.xuehao = "";
          this.formLabelAlign.tel = "";
          this.formLabelAlign.homeaddr = "";
          this.formLabelAlign.xingbie = "";
          this.formLabelAlign.banji = "";
          // 编程式导航 会查询页
          // this.$router.push("StudentManage");
          // alert("添加成功");
          MessageBox({
            type: "info",
            message: "学生信息添加成功"
          });
        } else {
          // alert("添加失败");
          MessageBox({
            type: "info",
            message: "学生信息添加失败"
          });
        }
      } else {
        alert("请输入完整学生信息！");
      }
    },
    // 加载覆盖面板
    openFullScreen2() {
      if (
        this.formLabelAlign.name &&
        this.formLabelAlign.xuehao &&
        this.formLabelAlign.tel &&
        this.formLabelAlign.homeaddr &&
        this.formLabelAlign.xingbie &&
        this.formLabelAlign.banji
      ) {
        const loading = this.$loading({
          lock: true,
          text: "正在插入数据库，请稍等",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          loading.close();
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.el-input {
  width: 300px;
}
.el-main {
  text-align: left;
}
.xingbie {
  width: 300px;
}
</style>
