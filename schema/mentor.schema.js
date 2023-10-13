const mongoose = require("mongoose")

const mentorshcame=  mongoose.Schema({
    name:{
        type:Array,
        required:true
    },
    department:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Mentor", mentorshcame)