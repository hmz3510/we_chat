const express = require("express");
const router = express.Router();
const pool = require("../pool.js")

router.get("/cartImg",(req,res)=>{
    var obj = [
        {id:1,img_url:"http://192.168.199.233:4000/images/shop-tab/01.png",title:"待付款"},
        {id:2,img_url:"http://192.168.199.233:4000/images/shop-tab/02.png",title:"待发货"},
        {id:3,img_url:"http://192.168.199.233:4000/images/shop-tab/03.png",title:"待收货"},
        {id:4,img_url:"http://192.168.199.233:4000/images/shop-tab/04.png",title:"待评价"},
        {id:5,img_url:"http://192.168.199.233:4000/images/shop-tab/05.png",title:"退货"}
    ]
    res.send(obj);
})

//查看购物车路由
router.get("/cartlist",(req,res)=>{
    var uid = req.query.uid;
    var sql = "select * from sc_shopcart INNER JOIN sc_laptop on product_id = lid WHERE user_id =? order by iid desc";
    pool.query(sql,[uid],(err,result)=>{
        if(err) console.log(err)
        res.writeHead(200,{
            'Content-Type':"application/json charset=utf-8",
            "Access-Control-Allow-Origin":'*'
        })
        res.write(JSON.stringify(result));
        res.end()
    })
})


//添加商品路由
router.get("/add",(req,res)=>{
    var lid = req.query.lid;
    var count = req.query.count;
    var uid = req.query.uid;
    pool.query("select * from sc_shopcart where user_id=? and product_id=?",[uid,lid],(err,result)=>{
        if(err) console.log(err)
        if(result.length==0){
            pool.query("insert into sc_shopcart values(null,?,?,?,0)",[uid,lid,count],(err,result)=>{
                if(err) console.log(err)
                res.end();
            })
        }else{
            pool.query("update sc_shopcart set count=count+? where user_id=? and product_id=?",[count,uid,lid],(err,result)=>{
                if(err) console.log(err)
                res.end();
            })
        }
    });
})


//更新购物车路由
router.get("/update",(req,res)=>{
    var iid = req.query.iid;
    var count = req.query.count;
    if(count>0){
        var sql = "update sc_shopcart set count=? where iid=?";
        var data = [count,iid];
    }else{
        var sql = "delete from sc_shopcart where iid=?";
        var data = [iid]
    }
    pool.query(sql,data,(err,result)=>{
        if(err) console.log(err)
        res.end();
    })
})



module.exports = router;