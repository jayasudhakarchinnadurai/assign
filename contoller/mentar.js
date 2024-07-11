const Mentormodel = require("../schema/mentor.schema.js");
const menterRouter=require("express").Router();


//     "department":""
// }


menterRouter.post("/crementor" , async function (req, res,next){
    const {name ,department}=req.body;
     const mentornew=  await  Mentormodel({
        name:name,
        department:department
    })

    await mentornew.save()

    res.status(200).json({
        mentornew,
        message:'create successfull',
    })
})


menterRouter.get("/mentor" ,  async(req, res)=>{
    try {
        const mentor = await Mentormodel.find();
        res.status(200).send({
            data:mentor
        })
        
    } catch (error) {
        res.status(500).send({
            message:"your internal server error"
        })
    }
 
})


module.exports=menterRouter;