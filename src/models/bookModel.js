const mongoose = require('mongoose');

 const bookModel = new mongoose.Schema({

    bookName: String,
    type: true,
    authorName: { String,
    required : true,

    },
    prices: {
        indianPrice: String,
        europePrice: String,
},

yesr : {type:Number, default:2014},

tags : [String],
authorName: String,
totalPages: Number,

stockAvailable : Boolean,

},{timestamps: true});

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users

// module.exports = mongoose.model('Book', bookModel) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
