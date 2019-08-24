const express=require('express');
var router=express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
//var {Category} = require('../models/categoryModel');
var {Food} = require('../models/foodModel');
var {Category}=require('../models/categoryModel');


router.post('/',(req, res) => {
    var insertData = new Food({
        fname: req.body.fname,
        fdesc: req.body.fdesc,
        fprice: req.body.fprice,
        fpic: req.body.fpic,
        category_id: req.body.category_id,
    });
    insertData.save((err, doc) => {
        if(!err) {res.send(doc); console.log(doc);}
        else {console.log('Error saving data : '+JSON.stringify(err));}
    });
});
//select all the foods
//http://localhost:3000/foods
router.get('/',(req, res) => {
    Food.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error in Retriving Food Detail..!'+JSON.stringify(err));}
    });
});
//select a specific food by id
//http://localhost:3000/foods
router.get('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record given with id : ${req.params.id}`);

    Food.findById(req.params.id, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('Error Retriving Food Data : ' + JSON.stringify(err));
    });
});
//update the database
router.put('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id : ${req.params.id}');
    var updateData={
        fname: req.body.fname,
        fdesc: req.body.fdesc,
        fprice: req.body.fprice,
        fpic: req.body.fpic,
        category_id: req.body.category_id,
    };
    Food.findByIdAndUpdate(req.params.id, {$set: updateData}, {new: true}, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('Error in Updating Update : '+JSON.stringify(err, undefined, 2));
    });
});
//delete from database
router.delete('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No records with given id : ${req.params.id}');
    Food.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) res.send(doc);
        else console.log('No record with the given Id : '+JSON.stringify(err, undefined, 2));
    });
});

module.exports = router;

