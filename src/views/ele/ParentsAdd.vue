<template>
  <el-main>
    <div id="ParentAdd">
      <!--  头部-->
      <div class="allheader">
            <h1>家长信息管理</h1>
            <span class="mianbaoqie">/</span>
            <span>家长信息添加</span>
        </div>
      <Header />
      <!-- 表单部分 -->
      <el-form ref="form" :model="form" label-width="100px" >

        <el-form-item label="学号" style="width:450px">
          <el-input v-model="form.xuehao"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名" style="width:450px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="监护人姓名" style="width:450px">
          <el-input v-model="form.parent_name"></el-input>
        </el-form-item>
        <el-form-item label="性别" style="width:450px">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="工作" style="width:450px">
          <el-input v-model="form.job"></el-input>
        </el-form-item>
          <el-form-item label="联系电话" style="width:450px">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item style="float: left;">
          <el-button type="primary" @click="onSubmit(form)">创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

    </div>

  </el-main>
</template>
<script>
import Header from "../../components/Header.vue";
import axios from "axios";
export default {
  name: "ParentAdd",
  components: {
    Header
  },
  data() {
      return {
       form: {
        xuehao: "",
        name: "",
        parent_name: "",
        sex: "",
        job: "",
        tel: ""
      },
      }
  },
    methods: {
      onSubmit(form) {
        
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '是否提交？ '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              // console.log(form)
               let data =  axios({
              method: "get",
              url: "http://localhost:3000/parans/adds",
              params: {
              json: form
              }
              });
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
};
</script>
