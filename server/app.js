require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
var categoryController=require('./controllers/categoryController.js'); //calling the controller with routing
var foodController=require('./controllers/foodController.js');
var picController=require('./controllers/picController.js');
var questionController=require('./controllers/questionController.js');
var userques=require('./controllers/userquesContoller.js');
var resultController=require('./controllers/resultController.js');
var viewuserController=require('./controllers/viewuserController.js');
var userattend=require('./controllers/userattendController.js');
var ressub=require('./controllers/ressubController.js');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
app.use('/categories',categoryController);
app.use('/foods',foodController);
app.use('/pics',picController);
app.use('/question',questionController);
app.use('/viewques', userques);
app.use('/result',resultController);
app.use('/userattend',userattend);
app.use('/viewuser',viewuserController);
app.use('/ressub',ressub);