const express = require("express");
const router = express.Router();
const pool = require("../pool.js")

//获取导航信息
router.get("/navlist",(req,res)=>{
    var sql ="select * from sc_laptop_nav";
    pool.query(sql,(err,result)=>{
        if(err) console.log(err)
        res.writeHead(200,{
            'Content-Type':"application/json charset=utf-8",
            "Access-Control-Allow-Origin":'*'
        })
        res.write(JSON.stringify(result));
        res.end()
    })

})

router.get("/navContent",(req,res)=>{
    var pid = req.query.pid;
    var sql = "select * from sc_laptop_product where pid=? "
    pool.query(sql,[pid],(err,result)=>{
        if(err) console.log(err)
        res.writeHead(200,{
            'Content-Type':"application/json charset=utf-8",
            "Access-Control-Allow-Origin":'*'
        })
        res.write(JSON.stringify(result));
        res.end()
    })
})













module.exports = router;