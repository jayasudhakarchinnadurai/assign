 const { default: mongoose } = require("mongoose");
const moongoose= require("mongoose");

 const AssignSchema= mongoose.Schema({
Asiganid:{
    type:moongoose.Schema.Types.ObjectId,
    required:true

},
studentname:{
    type:String,
    required:true

},
studentmail:{
    type:String,
    required:true

}


 })


 const Assigning= mongoose.model("assign", AssignSchema)
 module.exports= Assigning