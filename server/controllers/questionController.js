const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/question');

router.get('/', (req, res) => {
    Question.find((err, docs) => {
        if (!err)
         {
             res.send(docs);
         }
        else { console.log('Error in Retriving Question :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Question.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var qes = new Question({
        qname: req.body.qname,
        opt1: req.body.opt1,
        opt2: req.body.opt2,
        opt3: req.body.opt3,
        opt4: req.body.opt4,
        canswer: req.body.canswer,
        category_id : req.body.category_id
    });
    qes.save((err, doc) => {
        if (!err) { res.send(doc);
            console.log(doc);
         }
        else { console.log('Error in Question Save :' + JSON.stringify(err)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var qes = {
        qname: req.body.qname,
        opt1: req.body.opt1,
        opt2: req.body.opt2,
        opt3: req.body.opt3,
        opt4: req.body.opt4,
        canswer: req.body.canswer,
        sid: req.body.sid
    };
    Question.findByIdAndUpdate(req.params.id, { $set: qes }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Question Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Question.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Question Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;