const express = require("express");
const router = express.Router();
const pool = require("../pool.js")






router.post("/getUser",(req,res)=>{
    var openid = req.body.openid;
    var sql = "select * from sc_user where openid = ?"

    pool.query(sql,[openid],(err,result)=>{
        if(err) console.log(err)
        res.writeHead(200,{
            'Content-Type':"application/json charset=utf-8",
            "Access-Control-Allow-Origin":'*'
        })
        res.write(JSON.stringify(result));
        res.end()
    })
})


// router.post("/addUser",(req,res)=>{
//     var openid = req.body.openid;
//     var nickName  = req.body.nickName;
//     var avatarUrl = req.body.avatarUrl;
//     var  province = req.body.province;
//     var sql1 = "select * from sc_user where openid=?";
//     console.log(openid,nickName,avatarUrl,province)
//     pool.query(sql1,[openid],(err,result)=>{
//         if(err) console.log(err)
//         if(result.length>0){
//             pool.query("update sc_user set nickName,avatarUrl,province where openid=?",[openid,nickName,avatarUrl,province],(err,result)=>{
//                 if(err) console.log(err);

//             })

//         }else{
//             var sql = "insert into sc_user values (NULL,?,?,?,?)";
//             pool.query(sql,[openid,nickName,avatarUrl,province],(err,result)=>{
//                 if(err) console.log(err)
//                 res.writeHead(200,{
//                     'Content-Type':"application/json charset=utf-8",
//                     "Access-Control-Allow-Origin":'*'
//                 })
//                 res.write(JSON.stringify(result));
//                 res.end()
//             })
//         }
//     })
    
// })


module.exports = router;