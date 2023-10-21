const AssignModel = require('../schema/assign.schema.js');
const Mentormodel=require("../schema/mentor.schema.js")
const AssignRouter= require('express').Router();
const studentmodel=require("../schema/student.schema.js")
const PriviousModel=require("../schema/previous.schema.js")

//3.create Assign  to mantor add students
//http://localhost:3000/api/creassign
//enter your student id and mentorid
// {
//   "id":"studentid",
//   "idx":"mentor id"
// }



AssignRouter.post("/creassign",async(req,res)=>{
    const {idx,id}=req.body
   const student=await studentmodel.findOne({_id:id})
   const mentor=await Mentormodel.findOne({_id:idx})
try {
     const Assignnew = await AssignModel({
        MentorId:idx,
        MentorName:mentor.name,
        StudentName: student.name,
        StudentEmail:student.email
    })
    const priviousnew = await PriviousModel({
        previousMentor:mentor.name,
        StudentName:student.name,
        StudentEmail:student.email
    })
    await priviousnew.save();

   await Assignnew.save();
     res.status(200).send({
     message:"successfull create",
     data:Assignnew
   })
        
    } catch (error) {
        res.status(500).send({message:"your internal server error"})
        console.log(error)
        
    }
})

//4.show all students assign particular mentor
//http://localhost:3000/api/assignall
//enter your mentor name
//{
//     "MentorName":"name"
    
// }
AssignRouter.get('/assignall', async(req,res)=>{
    const {MentorName}=req.body
   

    try {
        const Assingstudent= await AssignModel.find({MentorName:MentorName})
         res.status(200).send({
            message:"fetch successfull",
            data:Assingstudent
        })

        
    } catch (error) {
        res.status(500).send({
            message:"your internal server error"
        })
        
    }

})

//5.change to mentor to student
//http://localhost:3000/api/changassign/:assignid
//enter your assign id for req.params and req.body student id and mentor id
// {
  
//     "id":"studentid",
//     "idx":"mentorid"
    
//   }

AssignRouter.put("/changassign/:assignid",async(req,res)=>{
    const {assignid}=req.params
    const {idx,id}=req.body
   const student=await studentmodel.findOne({_id:id})
   const mentor=await Mentormodel.findOne({_id:idx})
   
try {
    const edit =  await AssignModel.findByIdAndUpdate(assignid,
        {$set:
        {
            MentorId:idx,
            MentorName:mentor.name,
            StudentName: student.name,
            StudentEmail:student.email
       }})

   
     res.status(200).send({
     message:"successfull create",
     data:edit
   })
        
    } catch (error) {
        res.status(500).send({message:"your internal server error"})
        console.log(error)
        
    }
})

//6.previous mentor particular mentor name and student details
//http://localhost:3000/api/privious

AssignRouter.get("/previous",async(req,res)=>{

    try {
        const previous= await PriviousModel.find();
        res.status(200).send({
            message:"succsesfull",
            data:previous

        })
        
    } catch (error) {
        res.status(500).send({
            message:"internal server error "
        })
        
    }
})

module.exports=AssignRouter;