const mongoose = require("mongoose")

const mentorshcame=  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
   Assign:[
    {
        Studentname:{
            type:String,
        }
    },
    {
        Studentemail:{
            type:String
        }
    }
]
},
{
    versionKey:false
})

const Mentormodel=mongoose.model("Mentor", mentorshcame)
module.exports=Mentormodel