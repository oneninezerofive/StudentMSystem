<template>
    <el-main>
        <!--  头部-->
        <Header />
        <!-- 表格区域 -->
        <template>
            <!-- biaoge盒子不要删   里面的内容可以替换 -->
            <div id="parents">
                <div class="biaoge">
                    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" stripe style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="name" label="学生姓名" width="160"></el-table-column>
                        <el-table-column prop="parent_name" label="监护人姓名" width="160"></el-table-column>
                        <el-table-column prop="sex" label="性别" width="160"></el-table-column>
                        <el-table-column prop="job" label="工作" width="160"></el-table-column>
                        <el-table-column prop="tel" label="联系电话" width="160"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">

                                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                    <div style="margin-top: 20px;float: left;">
                        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                        <el-button @click="toggleSelection()">取消选择</el-button>
                    </div>

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
          name: "王小虎",
          parent_name: "王大虎",
          sex: "男",
          job: "包租公",
          tel: "18312345678"
        },
        {
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
        {
          name: "张三三",
          parent_name: "张一军",
          sex: "男",
          job: "工人",
          tel: "18312356878"
        },
          {
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },  {
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },  {
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },  {
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },  {
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },  {
          name: "李阿狗",
          parent_name: "李花花",
          sex: "男",
          job: "老板",
          tel: "18312333678"
        },
      ]
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
    // 表格选择器
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
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
}
</style>





