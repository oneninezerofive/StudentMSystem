<template>
  <el-main>
    <!--  头部-->
    <div class="allheader">
      <h1>家长信息管理</h1>
      <span class="mianbaoqie">/</span>
      <span>家长信息查询</span>
    </div>
    <Header />
    <!-- 表格区域 -->
    <template>
      <!-- biaoge盒子不要删   里面的内容可以替换 -->
      <div id="parents">
        <div class="biaoge">
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            stripe
            style="width: 100%"
          >
            <el-table-column type="index" :index="indexMethod"></el-table-column>
            <el-table-column label="学号" width="140">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.xuehao }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="学生姓名" width="140"></el-table-column>
            <el-table-column prop="parent_name" label="监护人姓名" width="140"></el-table-column>
            <el-table-column prop="sex" label="性别" width="140"></el-table-column>
            <el-table-column prop="job" label="工作" width="140"></el-table-column>
            <el-table-column prop="tel" label="联系电话" width="140"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <!-- 修改按钮 -->
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  @click="FormVisible(scope.$index,scope.row)"
                ></el-button>
                <!-- 弹出框 -->
                <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
                  <el-form :model="form2" style="width:450px;">
                    <el-form-item label="学号" :label-width="formLabelWidth">
                      <el-input v-model="form2.xuehao" autocomplete="off" readonly="readonly"></el-input>
                    </el-form-item>
                    <el-form-item label="学生姓名" :label-width="formLabelWidth">
                      <el-input v-model="form2.name" autocomplete="on"></el-input>
                    </el-form-item>
                    <el-form-item label="监护人姓名" :label-width="formLabelWidth">
                      <el-input v-model="form2.parent_name" autocomplete="on"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                      <el-input v-model="form2.sex" autocomplete="on"></el-input>
                    </el-form-item>
                    <el-form-item label="工作" :label-width="formLabelWidth">
                      <el-input v-model="form2.job" autocomplete="on"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" :label-width="formLabelWidth">
                      <el-input v-model="form2.tel" autocomplete="on"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click=" Submit(scope.$index,form2)">确 定</el-button>
                  </div>
                </el-dialog>
                <!-- 删除按钮 -->
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="del(scope.$index, tableData)"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <el-pagination
          align="right"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1,5,10,20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          class="pages"
        ></el-pagination>
      </div>
    </template>
  </el-main>
</template>
<script>
import Header from "../../components/Header.vue";
import axios from "axios";
export default {
  name: "Parents",
  components: {
    Header
  },
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 8, // 每页的数据条数

      dialogFormVisible: false,
      form: {
        xuehao: "",
        name: "",
        parent_name: "",
        sex: "",
        job: "",
        tel: ""
      },
      form2: {
        xuehao: "",
        name: "",
        parent_name: "",
        sex: "",
        job: "",
        tel: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    //表格索引
    indexMethod(index) {
      return index * 1;
      console.log(123);
    },
    //  表格修改
    FormVisible(index, row) {
      this.dialogFormVisible = true;
      this.form2.xuehao = row.xuehao;
      this.form2.name = row.name;
      this.form2.parent_name = row.parent_name;
      this.form2.sex = row.sex;
      this.form2.job = row.job;
      this.form2.tel = row.tel;
    },
    //修改提交
    async Submit(index, form2) {
      this.$confirm("确定数据完整，提交?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let data = await axios({
            method: "get",
            url: "http://localhost:3000/parans/updata",
            params: {
              xuehao0: form2.xuehao,
              name0: form2.name,
              parent_name0: form2.parent_name,
              sex0: form2.sex,
              job0: form2.job,
              tel0: form2.tel
            }
          });
          this.$message({
            type: "success",
            message: "提交成功!"
          });

          // console.log(data.data.n);
          // 如果修改成功，重新渲染
          if (data.data.n === 1) {
            let dat = await axios.get("http://localhost:3000/parans/par");
            this.tableData = dat.data;
            this.dialogFormVisible = false;
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交"
          });
        });
    },

    // 删除提示
    async del(index, row) {
      // console.log(row[index].xuehao);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let data = await axios({
            method: "get",
            url: "http://localhost:3000/parans/delete",
            params: {
              _id: row[index].xuehao
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });

          // console.log(data.data.n);
          // 如果修改成功，重新渲染
          if (data.data.n === 1) {
            let dat = await axios.get("http://localhost:3000/parans/par");
            this.tableData = dat.data;
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    async getNew() {
      let data = await axios.get("http://localhost:3000/parans/par");
      this.tableData = data.data;
      //  console.log(data);
    },
    //分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  },
  created() {
    this.getNew();
  },
  activated() {
    this.del();
    this.Submit();
  }
};
</script>
<style>
/* 表格样式 */
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
#parents .biaoge {
  line-height: 40px;
}
/*分页*/
#parents .pages {
  float: right;
  margin-top: 27px;
  /* margin: auto; */
}
</style>





