const express=require('express');
var router=express.Router();
var objectid=require('mongoose').Types.ObjectId;
var {Result}=require('../models/result');

router.get('/:email/:subject', (req, res) => {
    Result.find({email:req.params.email,category_id:req.params.subject}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;