const mongoose = require('mongoose');

/*mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});*/

mongoose.connect('mongodb://localhost:27017/questionDB',(err)=>{
    if(!err)
    {
        console.log('Connection Success..');
    }
    else{
        console.log('Error in connection '+JSON.stringify(err,undefined,2));

    }
});

require('./user.model');
require('./reguser.model');