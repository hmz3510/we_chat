//加载模块
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const index = require("./router/index.js")
const navlist = require("./router/navlist");
const details = require("./router/details")
const user = require("./router/user")
const carts = require("./router/cart")
//创建express对象
var app = express();

//监听端口
app.listen(4000,()=>{    
})

//指定静态目录
app.use(express.static(__dirname+"/public")); //这样就变成了绝对路径

//允许哪个程序跨域范文 脚手架
app.use(cors({
    origin:["http://127.0.0.1:4000","http://localhost:4000"],
    credentials:true
}))
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/user',user)
app.use("/index",index)
app.use("/navlist",navlist);
app.use("/details",details)
app.use("/carts",carts)
