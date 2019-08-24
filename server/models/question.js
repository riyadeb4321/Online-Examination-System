const mongoose=require('mongoose')
var Question=mongoose.model('question',{

    qname: {type: String},
    opt1: {type: String},
    opt2: {type: String},
    opt3: {type: String},
    opt4: {type: String},
    canswer: {type: String},
    category_id:{type:String}
})
module.exports={Question}