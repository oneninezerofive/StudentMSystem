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
            <!-- ============== -->

            <!-- ============== -->
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <!-- <el-popover placement="right" width="400" trigger="click" v-model="visible"> -->
                <!-- 修改内容 -->
                <el-dialog
                  title="修改信息"
                  :visible.sync="dialogVisible"
                  width="50%"
                  :before-close="handleClose"
                >
                  <!-- =-------------- -->
                  <div class="xiugai">
                    <el-form label-width="80px" :model="updateForm">
                      <el-form-item label="姓名:">
                        <el-input v-model="updateForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="学号">
                        <el-input v-model="updateForm.xuehao"></el-input>
                      </el-form-item>
                      <el-form-item label="手机号码">
                        <el-input v-model="updateForm.tel"></el-input>
                      </el-form-item>

                      <el-form-item label="性别：">
                        <el-select v-model="updateForm.xingbie" placeholder="性别" class="xingbie">
                          <el-option label="男生" value="男"></el-option>
                          <el-option label="女生" value="女"></el-option>
                        </el-select>
                      </el-form-item>

                      <el-form-item label="家庭住址:">
                        <el-input v-model="updateForm.homeaddr"></el-input>
                      </el-form-item>

                      <el-form-item label="班级：">
                        <el-select v-model="updateForm.banji" placeholder="班级" class="xingbie">
                          <el-option label="1901" value="1901"></el-option>
                          <el-option label="1902" value="1902"></el-option>
                          <el-option label="1903" value="1903"></el-option>
                          <el-option label="1904" value="1904"></el-option>
                          <el-option label="1905" value="1905"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-form>
                  </div>
                  <!-- =-------------- -->
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="onSubmit">确 定</el-button>
                  </span>
                </el-dialog>
                <!-- 修改内容 -->
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  slot="reference"
                >编辑</el-button>
                <!-- </el-popover> -->

                <el-button
                  size="mini"
                  type="danger"
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </div>

    <!-- <div style="margin-top: 15px;float:left;">
      <el-button @click="toggleSelection(tableData)">反选</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>-->
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
// { name, xuehao, tel, homeaddr, banji, xingbie }
export default {
  data() {
    return {
      totalTableData: [],
      tableData: [],
      pages: 0,
      currentPage: 1,
      multipleSelection: [],
      updateForm: {
        name: "",
        xuehao: "",
        tel: "",
        homeaddr: "",
        xingbie: "",
        banji: "",
        _id: ""
      },
      dialogVisible: false
    };
  },
  async mounted() {
    let data = await this.$axios("http://localhost:3000/getdata");
    // 所有数据
    this.totalTableData = data.data;
    // 当前页第一页显示数据10条
    this.tableData = this.totalTableData.slice(
      (this.currentPage - 1) * 10,
      this.currentPage * 10
    );
    // 把总条数给分页生成页数 10条一页
    this.pages = data.data.length;
  },

  methods: {
    // 减少padding值 不会出现滚动条
    cellstyle({ row, column, rowIndex, columnIndex }) {
      let style = {
        padding: "10px 5px"
      };
      return style;
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
    // 修改按钮
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogVisible = true;
      this.updateForm.name = row.name;
      this.updateForm.xuehao = row.xuehao;
      this.updateForm.tel = row.tel;
      this.updateForm.homeaddr = row.homeaddr;
      this.updateForm.xingbie = row.xingbie;
      this.updateForm.banji = row.banji;
      this.updateForm._id = row._id;
    },

    async deleteRow(index, rows) {
      // 点击删除发送请求
      // 点击删除 就删除行
      MessageBox.confirm("此操作将永久删除该学生信息, 是否继续?", "删除提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let data = await this.$axios({
            url: "http://localhost:3000/remove",
            params: {
              // 发送当前行的id
              _id: rows[index]._id
            }
          });

          if (data.data.result.n === 1) {
            // 删除的时候先拿到最新的数据

            // 数据变化的时候再执行一次渲染
            let data = await this.$axios("http://localhost:3000/getdata");
            // 所有数据
            this.totalTableData = data.data;

            // 当前页第一页显示数据10条
            this.tableData = this.totalTableData.slice(
              (this.currentPage - 1) * 10,
              this.currentPage * 10
            );
            // 把总条数给分页生成页数 10条一页
            this.pages = data.data.length;
            // 提示信息
            MessageBox({
              type: "success",
              message: "删除成功!"
            });

            // 删除行
            // rows.splice(index, 1);
          }
        })
        .catch(() => {
          MessageBox({
            type: "info",
            message: "已取消删除"
          });
        });

      // console.log(rows);
      // rows.splice(index, 1);
    },
    // 修改保存按钮
    async onSubmit() {
      // this.visible = false;
      this.dialogVisible = false;
      let data = await this.$axios({
        url: "http://localhost:3000/Update",
        params: {
          // 发送当前行的id
          name: this.updateForm.name,
          xuehao: this.updateForm.xuehao,
          tel: this.updateForm.tel,
          homeaddr: this.updateForm.homeaddr,
          xingbie: this.updateForm.xingbie,
          banji: this.updateForm.banji,
          _id: this.updateForm._id
        }
      });
      console.log(data.data.result);
      if (data.data.result.n === 1) {
        // 数据变化的时候再执行一次渲染
        let data = await this.$axios("http://localhost:3000/getdata");
        // 所有数据
        this.totalTableData = data.data;

        // 当前页第一页显示数据10条
        this.tableData = this.totalTableData.slice(
          (this.currentPage - 1) * 10,
          this.currentPage * 10
        );
        // 把总条数给分页生成页数 10条一页
        this.pages = data.data.length;
        MessageBox({
          type: "success",
          message: "信息更新成功!"
        });
      }
    },
    handleClose(done) {
      MessageBox.confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
    // 全选反选
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();

    //   }
    // }
  }
};
</script>



<style scoped>
.aaaa {
  height: 550px;
  /* overflow-y: auto; */
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
.el-input--suffix {
  width: 280px;
}
</style>
