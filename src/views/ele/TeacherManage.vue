<template>
  <el-main>
    <!-- 头部 -->
    <div class="allheader">
      <h1>教师信息管理</h1>
      <span class="mianbaoqie">/</span>
      <span>教师信息查询</span>
    </div>

    <!-- 表格区域 -->
    <template>
      <!-- biaoge盒子不要删   里面的内容可以替换 -->
      <div class="biaoge">
        <el-table :border="true" :data="teacherData" stripe style="width: 100%">
          <el-table-column prop="id" label="编号" width="80"></el-table-column>
          <el-table-column  prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column  prop="age" label="年龄" width="180"></el-table-column>
          <el-table-column  prop="class" label="班级"></el-table-column>
          <el-table-column  prop="sj" label="学科"></el-table-column>
          <el-table-column  prop="st" label="学历"></el-table-column>
          <el-table-column  prop="make" label="操作">
              <el-row id="button" slot-scope="scope">
                <el-button type="text" @click="xiugai(scope.row)">修改</el-button>
                <el-button type="text" @click="remove(scope.row._id)">删除</el-button>
              </el-row>
          </el-table-column>
        </el-table>
        <el-dialog
        title="修改教师信息"
        :visible.sync="dialogVisible"
        width="70%"
        height="70%"
        :before-close="handleClose">
            <ul id="myalter">
                <li>
                    <strong>姓名：</strong>
                    <el-input
                    placeholder="请输入姓名"
                    v-model="newname"
                    clearable>
                    </el-input>
                </li>
                <li>
                    <strong>年龄：</strong>
                    <el-input
                    placeholder="请输入年龄"
                    v-model="newage"
                    clearable>
                    </el-input>
                </li>
                <li>
                    <strong>班级：</strong>
                    <el-input
                    placeholder="请输入班级"
                    v-model="newbanji"
                    clearable>
                    </el-input>
                </li>
                <li>
                    <strong>学科：</strong>
                    <el-input
                    placeholder="请输入学科"
                    v-model="newxueke"
                    clearable>
                    </el-input>
                </li>
                <li>
                    <strong>学历：</strong>
                    <el-input
                    placeholder="请输入学历"
                    v-model="newxueli"
                    clearable>
                    </el-input>
                </li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button @click="quxiao">取 消</el-button>
                <el-button type="primary" @click="queding">确 定</el-button>
            </span>
        </el-dialog>
      </div>

      
    </template>

    <!-- 分页 -->
      <el-pagination 
        background 
        layout="prev, pager, next"  
        @current-change="handleCurrentChange"
        :page-size="10" 
        :total="totalpage" 
        class="pages"></el-pagination>
  </el-main>
</template>


<script>
import { MessageBox } from "element-ui";

export default {
  data() {
    return {
      teacherData: [],
      index:0,
      totalpage : 10,
      dialogVisible: false,
      newname: "",
      newage: "",
      newbanji: "",
      newxueke: "",
      newxueli: "",
      id: ""
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    quxiao() {
      this.dialogVisible = false;
    },
    queding() {
      this.dialogVisible = false;
      const param = `name1=${this.newname}&age1=${this.newage}&class1=${
        this.newbanji
      }&sj1=${this.newxueke}&st1=${this.newxueli}&_id=${this.id}`;
      this.$axios
        .get("http://localhost:3000/teacher/update?" + param)
        .then(data => {
          console.log(data);
          this.teacherData.forEach(element => {
            if (element._id == this.id) {
              element.name = this.newname;
              element.age = this.newage;
              element.class = this.newbanji;
              element.sj = this.newxueke;
              element.st = this.newxueli;
              //   break;
            }
          });
        });
    },
    xiugai(row) {
      console.log(row);
      this.dialogVisible = true;
      this.id = row._id;
      this.newname = row.name;
      this.newage = row.age;
      this.newbanji = row.class;
      this.newxueke = row.sj;
      this.newxueli = row.st;
    },

    remove(id) {
      console.log(id);
      this.id = id;
      MessageBox.confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }) .then(() => {
          console.log(1);
        this.$axios
            .get("http://localhost:3000/teacher/remove?id=" + this.id).then( result =>{
                console.log(result);
                for(let i = 0; i < this.teacherData.length; i++){
                    if(this.teacherData[i]._id == id){
                        this.teacherData.splice(i,1)
                        break;
                    }
                }
            } )
         this.$message({
            type: 'success',
            message: '删除成功!'
          });
            })
        .catch(() => { 
            console.log(2);
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    async handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.index = val - 1;
      let teacherlist = await this.getDate()
      console.log(teacherlist.data);
      this.teacherData = teacherlist.data.limitData
    },
    getDate(){
      return  this.$axios.get(
        "http://localhost:3000/teacher/list?index="+ this.index + "&conust=10"
      )
    }

  },

  async created() {
    let teacherlist = await this.getDate()
    console.log(teacherlist);
    this.teacherData = teacherlist.data.limitData
    this.totalpage = teacherlist.data.strip
    // console.log(this.teacherData);
  }
};
</script>



<style>
#myalter li {
  display: flex;
  margin-bottom: 20px;
}
#myalter li strong {
  width: 50px;
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
