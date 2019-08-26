const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pending = new Schema({

    locationName: { type: String },
    locationAddress: { type: String }    
});


module.exports = mongoose.model('pending', pending );


