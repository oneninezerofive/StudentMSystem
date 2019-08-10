var express = require('express');
var router = express.Router();
var {
    insert,
    find,
    update,
    remove,
    ObjectId
} = require('../libs/db');

/* GET home page. */
router.post('/insert', async function (req, res) {
    // res.render('index', { title: 'Express' });
    let {
        id1,
        name1,
        age1,
        class1,
        sj1,
        st1
    } = req.body;
    await insert('Teacher', [{
        id:id1,
        name: name1,
        age: age1,
        class: class1,
        sj: sj1,
        st: st1
    }]);
    res.send("添加成功");
    // console.log("添加成功");
});
router.get('/list', async function (req, res) {
    const str = JSON.stringify(req.query);
    const param = JSON.parse(str);
    const index = param.index - 0;
    const conust = param.conust - 0;
    // console.log('index,conust', index, conust);

    let cha = await find('Teacher', {});
    // console.log(cha);
    //总条数
    const strip = cha.length;
    //总页数
    const totalPage = Math.ceil(strip / conust);
    //截取的起始下标
    var start = index * conust;
    // console.log('start', start, typeof (start));
    //截取的终点下标，不是截取的数量
    var end = index * conust + conust;
    //  console.log('end', end, typeof (end));
    //截取的conust数量大小的数据
    const limitData = cha.slice(start, end);

    const msg = {
        limitData,
        index,
        conust,
        strip,
        totalPage
    };

    res.send(msg);

    // res.send(cha);
    // console.log(cha);
});

router.get('/update', async function (req, res) {
    let {
        _id,
        name1,
        age1,
        class1,
        sj1,
        st1
    } = req.query;
    // console.log(req.query);
    await update('Teacher', {
        _id: ObjectId(_id)
    }, {
        $set: {
            name: name1,
            age: age1,
            class: class1,
            sj: sj1,
            st: st1
        }
    });
    res.send("更改成功");
});

router.get('/remove', async function (req, res) {
    let {
        id
    } = req.query;
    await remove('Teacher', {
        _id: ObjectId(id)
    });
    res.send("删除成功");
});



module.exports = router;