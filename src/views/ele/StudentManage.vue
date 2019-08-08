<template>
  <el-main>
    <!-- 头部 -->
    <div class="allheader">
      <h1>学生信息管理</h1>
      <span class="mianbaoqie">/</span>
      <span>学生信息查询</span>
    </div>
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
          >
            <el-table-column prop="xuehao" label="学号" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="homeaddr" label="地址" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="tel" label="手机"></el-table-column>
            <el-table-column prop="banji" label="班级"></el-table-column>
            <el-table-column prop="xingbie" label="性别"></el-table-column>
            <el-table-column type="selection" width="55"></el-table-column>
          </el-table>
        </div>
      </template>
    </div>
    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="pages" class="pages"></el-pagination>
  </el-main>
</template>


<script>
// { name, xuehao, tel, homeaddr, banji, xingbie }
export default {
  data() {
    return {
      tableData: [],
      pages: 0
    };
  },
  async mounted() {
    let data = await this.$axios("http://localhost:3000/getdata");
    console.log(1);
    console.log(data.data);
    this.tableData = data.data;
    this.pages = data.data.length;
  },
  methods: {
    // 减少padding值 不会出现滚动条
    cellstyle({ row, column, rowIndex, columnIndex }) {
      let style = {
        padding: "10px 5px"
      };
      return style;
    }
  }
};
</script>



<style>
.aaaa {
  height: 550px;
  overflow-y: auto;
}
.el-main {
  line-height: 20px;
}
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

/* 表格样式 */
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.biaoge {
  line-height: 40px;
}
</style>
