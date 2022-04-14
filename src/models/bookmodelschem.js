const mongoose = require('mongoose');

let BookUserSchema = new mongoose.Schema({

    bookName:{
        type: String,
        required: true
        
    },

    price : {
        indianPrice : String,
        unitedStatePrice : String
    },

    year : {
        type:Number,
        default: 2021,
    },

    tags : [String],

    authorName: String,
    totalPage : Number,
    stockAvailable : Boolean

},{timestamps : true});

module.exports = mongoose.model('Book', BookUserSchema)

