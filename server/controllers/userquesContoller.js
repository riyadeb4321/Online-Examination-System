const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/question');


router.get('/:subject', (req, res) => {
    Question.find({category_id:req.params.subject}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;