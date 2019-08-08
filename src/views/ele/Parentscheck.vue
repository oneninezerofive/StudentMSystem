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
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="xuehao" label="学号" width="140"></el-table-column>
            <el-table-column prop="name" label="学生姓名" width="140"></el-table-column>
            <el-table-column prop="parent_name" label="监护人姓名" width="140"></el-table-column>
            <el-table-column prop="sex" label="性别" width="140"></el-table-column>
            <el-table-column prop="job" label="工作" width="140"></el-table-column>
            <el-table-column prop="tel" label="联系电话" width="140"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <!-- 修改按钮 -->

                <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible = true"></el-button>
                <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
                  <el-form :model="form" style="width:450px">
                    <el-form-item label="学号" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="学生姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="监护人姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="工作" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>

                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  </div>
                </el-dialog>
                <!-- 删除按钮 -->
                <el-button type="danger" icon="el-icon-delete" circle @click="open"></el-button>
              </template>
            </el-table-column>

          </el-table>

        </div>
        <!-- 分页 -->
        <el-pagination background layout="prev, pager, next" :total="100" class="pages"></el-pagination>

      </div>

    </template>

  </el-main>

</template>
<script>
import Header from "../../components/Header.vue";
export default {
  name: "Parents",
  components: {
    Header
  },
  data() {
    return {
      tableData: [
        {
          xuehao: "9527",
          name: "王小虎",
          parent_name: "王大虎",
          sex: "男",
          job: "包租公",
          tel: "18312345678"
        },
        {
          xuehao: "9527",
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
        {
          xuehao: "9527",
          name: "张三三",
          parent_name: "张一军",
          sex: "男",
          job: "工人",
          tel: "18312356878"
        },
        {
          xuehao: "9527",
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
        {
          xuehao: "9527",
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
        {
          xuehao: "9527",
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
        {
          xuehao: "9527",
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
        {
          xuehao: "9527",
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
        {
          xuehao: "9527",
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        }
      ],

      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    //  表格删除
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 删除提示
    open() {
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
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





