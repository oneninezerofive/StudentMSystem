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
            <p class="test" v-for="index in 5" :key="index">
                姓名：<el-input v-model="input" placeholder="请输入姓名" style="width:500px"></el-input>
            </p>
        </template>

   </el-main>
</template>


<script>
export default {
  data() {
    return {
        input: ''
    };
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
.el-input .el-input__inner{
    width: 300px;
}
.el-main{
    line-height: 0px;
}
.test{
    margin-bottom: 20px;
}
</style>
