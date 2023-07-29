const express= require("express");
const bodyparser=require("body-parser");
const app = express();
app.get("/",function(req,res){
    res.sendFile(__dirname + "/weather.html");
})
app.listen(3000,function(){
    console.log("ths port is running");
})