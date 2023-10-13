const express = require("express");
const studentRouter = require("./contoller/student.js");
const menterRouter = require("./contoller/mentar.js");
const AssignRouter = require("./contoller/assign .js");
const app_server=express();
require("./db.config.js")

const bodyparser= require("body-parser");

app_server.use(bodyparser.urlencoded({extended:true}))
app_server.use(bodyparser.json());

app_server.use("/api", studentRouter);
app_server.use("/api",menterRouter);
app_server.use("/api", AssignRouter);

module.exports=app_server;
