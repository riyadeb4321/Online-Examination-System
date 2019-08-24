const express=require('express');
var router=express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Reguser = mongoose.model('Reguser');



router.get('/',(req, res) => {
    Reguser.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error in Retriving Food Detail..!'+JSON.stringify(err));}
    });
});



module.exports = router;

