const express = require("express");
const router = express.Router();
const pool = require("../pool.js")


/*获取首页数据 */
router.get("/index",(req,res)=>{
    var sql1 = "select * from sc_index_carousel";
    var sql2 = 'select * from sc_laptop where family_id = 1';
    var sql3 = 'select * from sc_laptop where family_id = 2 ';
    var output = {banner:{},fruit:{},tel:{}}
    Promise.all([
        new Promise(function(open){
            pool.query(sql1,(err,result)=>{
                if(err) console.log(err)
                output.banner = result;
                open();
            })
        }),
        new Promise(function(open){
            pool.query(sql2,(err,result)=>{
                if(err) console.log(err)
                output.fruit = result;
                open();
            })
        }),
        new Promise(function(open){
            pool.query(sql3,(err,result)=>{
                if(err) console.log(err);
                output.tel=result;
                open();
            })
        }).then(function(){
            res.writeHead(200,{
                'Content-Type':"application/json charset=utf-8",
                "Access-Control-Allow-Origin":'*'
            })
            res.write(JSON.stringify(output))
            res.end();
        })

    ])

})

/*首页导航 */
router.get('/nav',(req,res)=>{
    var obj=[
        {id:1,img:"http://192.168.199.233:4000/images/icons/nav-01.png",title:"用户中心"},
        {id:2,img:"http://192.168.199.233:4000/images/icons/nav-02.png",title:"我的订单"},
        {id:3,img:"http://192.168.199.233:4000/images/icons/nav-03.png",title:"我的收藏"},
        {id:4,img:"http://192.168.199.233:4000/images/icons/nav-04.png",title:"专题咨询"},
        {id:5,img:"http://192.168.199.233:4000/images/icons/nav-05.png",title:"服务中心"},
        {id:6,img:"http://192.168.199.233:4000/images/icons/nav-06.png",title:"优惠券"},
        {id:7,img:"http://192.168.199.233:4000/images/icons/nav-07.png",title:"全部商品"},
        {id:7,img:"http://192.168.199.233:4000/images/icons/nav-08.png",title:"关于我们"},

    ]
    res.writeHead(200,{
        'Content-Type':"application/json charset=utf-8",
        "Access-Control-Allow-Origin":'*'
    })
    res.write(JSON.stringify(obj))
    res.end();

})




module.exports = router;

