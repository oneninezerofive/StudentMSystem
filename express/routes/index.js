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
  insert, //增[{name:111,age:18}，{第二个}] 数组里面包对象
  Update, //改[{旧值}，{新值}]
  Remove, //删
  // id查询
  ObjectId
} = require('../libs/mdb.js')

/* GET home page. */
// 查询学生信息
router.get('/getdata', async function (req, res, next) {
  let data = await find('students');
  // console.log(data.length);
  res.send(data);
});

// 班级查询
router.get('/getbanji', async function (req, res, next) {
  let {
    banji
  } = url.parse(req.url, true).query;
  let data = await find('students', {
    banji: banji ? banji : ''
  });
  console.log(data);
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



// 删除信息
router.get('/remove', async function (req, res, next) {

  let {
    _id
  } = url.parse(req.url, true).query;
  let data = await Remove('students', {
    // 通过id删除
    _id: ObjectId(_id)
  });
  // console.log(data.length);
  res.send(data);
});



// 删除信息
router.get('/Update', async function (req, res, next) {

  let {
    name,
    xuehao,
    tel,
    homeaddr,
    banji,
    xingbie,
    _id
  } = url.parse(req.url, true).query;
  console.log(name,
    xuehao,
    tel,
    homeaddr,
    banji,
    xingbie,
    _id);
  let data = await Update('students', [{
    _id: ObjectId(_id)
  }, {
    name: name,
    xuehao: xuehao,
    tel: tel,
    homeaddr: homeaddr,
    xingbie: xingbie,
    banji: banji,
  }]);
  console.log(data);
  res.send(data);
});

console.log('serve run start');
module.exports = router;