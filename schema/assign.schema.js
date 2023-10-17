 const mongoose=require("mongoose")



const AssignSchema=  mongoose.Schema({
    MentorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    MentorName:{
        type:String,
        required:true
    },
    StudentName:{
            type:String,
            required:true,
        },
    StudentEmail:{
            type:String,
            required:true
        }
            
    
},
{
    versionKey:false
})


 const AssignModel= mongoose.model("assign", AssignSchema)
 module.exports= AssignModel