const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const stuuser = require('../controllers/reguser.controller');
var viewques = require('../controllers/userquesContoller');

const jwtHelper = require('../config/jwtHelper');
router.post('/register1',stuuser.register1);
router.post('/auth1',stuuser.authenticate1);
router.get('/reguserProfile',jwtHelper.verifyJwtToken,stuuser.reguserProfile1);
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
module.exports = router;



