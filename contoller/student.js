const mongoose=require("mongoose")
const studentmodel = require("../schema/student.schema.js");
const studentRouter=require("express").Router();





studentRouter.get("/student/:id", async (req, res) => {
    const {id}=req.params
    try {
      const users = await studentmodel.find()
      const data= users.find((value)=>value.id === id)
      res.send(data)

      
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  });

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