const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();

app.get("/",(req,res)=>{
    // res.send("hello world"); to send text
       res.sendFile(path.join(__dirname+"/index.html"));


});
app.post("/formsubmit",(req,res)=>{
    res.send("<h1>post method submitted</h1>");

});

app.listen(443,()=>{
    console.log("Server is Listening........");
});