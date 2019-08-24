const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Food = mongoose.model('Food',{ //give model name in singular so that it chnages to plural
    fname:{type: String},
    fdesc:{type: String},
    fprice:{type: Number},
    fpic:{type: String},
    //category_id:{type: Schema.Types.ObjectId}
    category_id:{type:String}
}); 
module.exports={Food};