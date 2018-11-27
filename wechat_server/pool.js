const mysql = require("mysql");
var pool = mysql.createPool({
    host:"127.0.0.1",
    poot:3306,
    user:"root",
    upwd:"",
    database:"wechat_hmz",
    connectionLimit:20    
})


module.exports = pool;

