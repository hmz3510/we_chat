const express = require("express");
const router = express.Router();
const pool = require("../pool.js")


router.get("/details",(req,res)=>{
    var lid  = req.query.lid;
    var laptop_id = req.query.family_id;
    var output={product:{},picture:[]};
    var sql1 = "select * from sc_laptop where lid=?";
    var sql2 = "select * from sc_laptop_pic where laptop_id=?";

    Promise.all([
        new Promise(function(open){
            pool.query(sql1,[lid],(err,result)=>{
                if(err) console.log(err)
                output.product = result;
                open()
            })
        }),
        new Promise(function(open){
            pool.query(sql2,[laptop_id],(err,result)=>{
                if(err) console.log(err);
                output.picture=result;
                open();
            })
        })
    ]).then(function(){
        res.writeHead(200,{
            "Content-Type":"application/json charset=utf-8",
            "Access-Control-Allow-Origin":'*'
        })
        res.write(JSON.stringify(output));
        res.end();
    })
})



module.exports = router;