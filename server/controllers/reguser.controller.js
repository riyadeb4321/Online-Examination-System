const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Reguser = mongoose.model('Reguser');

module.exports.register1 = (req, res, next) => {
    var reguser = new Reguser();
    reguser.fullName = req.body.fullName;
    reguser.email = req.body.email;
    reguser.phone = req.body.phone;
    reguser.address = req.body.address;
    reguser.password = req.body.password;
    reguser.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate1 = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local1', (err, reguser, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered reguser
        else if (reguser) return res.status(200).json({ "token": reguser.generateJwt() });
        // unknown reguser or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.reguserProfile1 = (req, res, next) =>{
    Reguser.findOne({ _id: req._id },
        (err, reguser) => {
            if (!reguser)
                return res.status(404).json({ status: false, message: 'reguser record not found.' });
            else
                return res.status(200).json({ status: true, reguser : _.pick(reguser,['fullName','email']) });
        }
    );
}