const express=require('express');
var router=express.Router();
var objectid=require('mongoose').Types.ObjectId;
var {Result}=require('../models/result');
router.get('/:subject',(req,res)=>{
    Result.aggregate([{ $match : { category_id : req.params.subject } },{
        $group:
        {
            _id:"$email",
            marks:{ $sum:"$marks"}
        }
    }],function(err,result){
        if(err) throw err;
        res.send(result);
    });
   });
   module.exports=router;