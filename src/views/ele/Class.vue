<template>
  <el-main>
    <!-- 头部 -->
    <div class="allheader">
      <h1>学生信息管理</h1>
      <span class="mianbaoqie">/</span>
      <span>班级信息查询</span>
    </div>
    <div class="banji">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="班级查询">
          <el-select v-model="formInline.banji" placeholder="班级">
            <el-option label="1901" value="1901"></el-option>
            <el-option label="1902" value="1902"></el-option>
            <el-option label="1903" value="1903"></el-option>
            <el-option label="1904" value="1904"></el-option>
            <el-option label="1905" value="1905"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit();openFullScreen2()">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格区域 -->

    <div class="aaaa">
      <!-- 表格区域 -->
      <template>
        <!-- biaoge盒子不要删   里面的内容可以替换 -->
        <div class="biaoge">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            max-height="600px"
            :cell-style="cellstyle"
            ref="multipleTable"
          >
            <!-- <el-table-column type="selection" width="55"></el-table-column> -->
            <el-table-column type="index" width="50"></el-table-column>

            <el-table-column prop="xuehao" label="学号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="homeaddr" label="地址" width="150" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="tel" label="手机"></el-table-column>
            <el-table-column prop="banji" label="班级"></el-table-column>
            <el-table-column prop="xingbie" label="性别"></el-table-column>
          </el-table>
        </div>
      </template>
    </div>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="pages"
      class="pages"
      @current-change="current_change"
    ></el-pagination>
  </el-main>
</template>


<script>
import { MessageBox } from "element-ui";

export default {
  data() {
    return {
      tableData: [],
      formInline: {
        banji: ""
      },
      pages: 0,
      currentPage: 1
    };
  },
  async mounted() {},
  methods: {
    // 表格的样式  窄一点
    cellstyle({ row, column, rowIndex, columnIndex }) {
      let style = {
        padding: "10px 5px"
      };
      return style;
    },
    //点击查询班级
    async onSubmit() {
      // console.log("查询班级" + this.formInline.banji);
      if (this.formInline.banji) {
        let data = await this.$axios({
          url: "http://localhost:3000/getbanji",
          params: {
            // 发送当前行的id
            banji: this.formInline.banji
          }
        });
        // 所有数据
        // console.log(data.data);
        this.totalTableData = data.data;
        // 当前页第一页显示数据10条
        this.tableData = this.totalTableData.slice(
          (this.currentPage - 1) * 10,
          this.currentPage * 10
        );
        // // 把总条数给分页生成页数 10条一页
        this.pages = data.data.length;
      } else {
        MessageBox({
          type: "info",
          message: "请输入需要查询的班级"
        });
      }
    },
    // 点击分页 渲染
    current_change(currentPage) {
      this.currentPage = currentPage;
      // console.log(this.currentPage);
      this.tableData = this.totalTableData.slice(
        (this.currentPage - 1) * 10,
        this.currentPage * 10
      );
    },
    // 加载覆盖面板
    openFullScreen2() {
      if (this.formInline.banji) {
        const loading = this.$loading({
          lock: true,
          text: "正在查询",
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

<style>
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
.el-main {
  line-height: 20px;
}
.banji {
  float: left;
}
.pages {
  /* float: right; */
  margin-top: 10px;
}
</style>
