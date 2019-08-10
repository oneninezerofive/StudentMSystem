<template>
  <el-main>
        <!-- 头部 -->
        <div class="allheader">
        <h1>教师信息管理</h1>
        <span class="mianbaoqie">/</span>
        <span>添加教师信息</span>
        </div>

        <!-- 输入区域 -->
        <template>
            <p>
                编号：<el-input v-model="input0" placeholder="请输入编号" style="width:200px"></el-input>
            </p>
            <p>
                姓名：<el-input v-model="input1" placeholder="请输入姓名" style="width:500px"></el-input>
            </p>
            <p>
                年龄：<el-input v-model="input2" placeholder="请输入年龄" style="width:500px"></el-input>
            </p>
            <p>
                班级：<el-input v-model="input3" placeholder="请输入班级" style="width:500px"></el-input>
            </p>
            <p>
                学科：<el-input v-model="input4" placeholder="请输入学科" style="width:500px"></el-input>
            </p>
            <p>
                学历：<el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="研究生" value="研究生"></el-option>
                        <el-option label="本科" value="本科"></el-option>
                        <el-option label="大专" value="大专"></el-option>
                     </el-select>
            </p>
            <el-row>
                <el-button type="primary" @click="add">添加</el-button>
            </el-row>

        </template>

   </el-main>
</template>


<script>
export default {
  data() {
    return {
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      select: ""
    };
  },
  methods: {
    async add() {
        // console.log(111);
      await this.$axios({
        method: "post",
        url: "http://localhost:3000/teacher/insert",
        data: this.$qs.stringify({
            id1:this.input0,
            name1:this.input1,
            age1:this.input2,
            class1:this.input3,
            sj1:this.input4,
            st1:this.select
        })
      }).then(res => {
        console.log(res.data);
        alert('添加成功')
      });
    }
  }
};
</script>



<style scoped>
.allheader {
  height: 60px;
  border-bottom: 2px solid #c4aeba;
  margin-bottom: 10px;
}
.allheader h1 {
  float: left;
  line-height: 60px;
}
.allheader span {
  float: left;
  line-height: 60px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
}

.mianbaoqie {
  color: #bbb;
  font-size: 12x;
}

.pages {
  float: right;
  margin-top: 15px;
}

/* 输入区域样式 */
.el-input .el-input__inner {
  width: 300px;
}
.el-main {
  line-height: 0px;
  text-align: left;
}
p {
  margin-bottom: 20px;
  margin-left: 20px;
}
.el-button,
.el-button--primary {
  margin-bottom: 20px;
  margin-left: 70px;
}
</style>
