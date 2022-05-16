const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    city:{
        type: String,
        required: true,
        unique: true
    },
    sort1:String,
    gender : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;