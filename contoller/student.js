const mongoose=require("mongoose")
const studentmodel = require("../schema/student.schema.js");
const studentRouter=require("express").Router();

//2.create api for student
//http://localhost:3000/api/creatstu
// enter your name email and batch
// {
//   "name":"",
//   "email":"",
//   "batch":""
// }

studentRouter.post("/creatstu" , async function (req, res){
    const {name, email, batch}=req.body
    const studentnew= await new studentmodel({
        name:name,
        email:email,
        batch,

    })
 await studentnew.save()
res.send(studentnew)
})

module.exports = studentRouter;