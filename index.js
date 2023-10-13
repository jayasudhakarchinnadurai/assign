const express = require("express");
const app_server = require("./app.js");
const Node_Server=express();
Node_Server.use("/" ,app_server)



const PORT=3000;

Node_Server.listen(PORT,  ()=>{
    console.log("APP STARTED")
})
