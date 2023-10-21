const mongoose=require("mongoose")


const PreviousSchema= mongoose.Schema({

    previousMentor:{
        type:String,
        required:true,
    },
    StudentName:{
        type:String,
        required:true
    },
    StudentEmail:{
        type:String,
        required:true
    }

},
{
versionKey:false
})


const PriviousModel = mongoose.model("privious",PreviousSchema)
module.exports=PriviousModel