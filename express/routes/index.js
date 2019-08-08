var express = require('express');
var router = express.Router();
var url = require('url');

var bodyParser = require("body-parser");

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.use((req, res, next) => {
  // 全局添加
  res.append("Access-Control-Allow-Origin", "*");
  next();
});
let {
  find,
  insert //增[{name:111,age:18}，{第二个}] 数组里面包对象
} = require('../libs/mdb.js')

/* GET home page. */
// 查询学生信息
router.get('/getdata', async function (req, res, next) {
  let data = await find('students');
  // console.log(data.length);
  res.send(data);
});

// 增加学生信息
router.get('/addStudent', async function (req, res, next) {

  let {
    name,
    xuehao,
    tel,
    homeaddr,
    banji,
    xingbie
  } = url.parse(req.url, true).query;
  // console.log(name, xuehao,'huahua');
  let data = await insert('students', [{
    name: `${name}`,
    xuehao: `${xuehao}`,
    tel: `${tel}`,
    homeaddr: `${homeaddr}`,
    banji: `${banji}`,
    xingbie: `${xingbie}`
  }]);
  console.log(data);
  res.send(data);
});


console.log('serve run start');
module.exports = router;