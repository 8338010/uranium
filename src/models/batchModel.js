const mongoose = require('mongoose');
const { modelName } = require('./bookModel');


const batchSchema = new mongoose.Schema({
    name: String,
    size : Number,
    program:{
        type: String,
        enum: ["backend","frontend"]
    }






},{timestamps: true});


module.exports = new mongoose.model('batch',batchSchema)