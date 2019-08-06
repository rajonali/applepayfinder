const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const location = new Schema({

    locationName: { type: String },
    locationAddress: { type: String },
    verified: { type: Boolean }
    
});


module.exports = mongoose.model('location', location );


