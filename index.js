const express = require("express");


const app = express();

app.get("/",function(req,res){
    console.log("Logging");
    res.send("Hii");
});


app.listen(3000,function(req,res){
    console.log("Server Started at Port 3000");
})