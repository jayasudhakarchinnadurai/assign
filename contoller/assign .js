const Assigning = require('../schema/assign.schema.js');
const AssignRouter= require('express').Router();

AssignRouter.get("/assign/:id", async(req, res)=>{
    const {id}=req.params
    
    try {
    //  const data= await Assigning.find() 
    //  const user= data.filter((value)=>value.id === id)
    //  res.send(user)
    res.send(id)
     
      
      
    } catch (err) {
      res.status(500).json({message: err.message})
    }
    
})


AssignRouter.post("/creassign/:id",async(req,res)=>{
const {id }=req.params
const{studentname, studentmail}=req.body

const Assiganstu=  await new Assigning({
Asiganid:id,
studentname:studentname,
studentmail:studentmail
})
Assiganstu.save();
res.send(Assiganstu)

})


AssignRouter.get("/assign/:id", async(req, res)=>{
    const{id}=req.params
    try {
        const data= await Assigning.find();
        data.filter((assign)=>assign.id === id)
        res.send(data)
        
    } catch (error) {
        console.log(error)
        
    }

})


module.exports=AssignRouter;