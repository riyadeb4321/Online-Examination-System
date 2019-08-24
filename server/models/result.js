const mongoose=require('mongoose');
var Result=mongoose.model('Result',{
    email:{type:String},
    qid:{type:String},
    uanswer:{type:String},
    canswer:{type:String},
    marks:{type:Number},
    category_id:{type:String}
});
module.exports={Result};