const mentorSchema = require("../schema/mentor.schema.js");

const menterRouter=require("express").Router();




menterRouter.get("/mentor" , function (req, res,next){
    res.status(200).json({
        message:"mentor fetch successfully"
    })

})


menterRouter.post("/crementor" , async function (req, res,next){
    const {name ,department}=req.body;
    const mentornew=  await new mentorSchema({
        name:name,
        department:department
    })

    await mentornew.save()

    res.status(200).json({
        mentornew,
        message:'create successfully',
    })
})


module.exports=menterRouter;