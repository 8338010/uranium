const mongoose =  require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,

    },

    author: {
        type: ObjectId,
        ref: 'newauthor'
    },
    price: Number,
    rating: Number,
    publisher:{
        type: ObjectId,
        ref: 'newPublisher'
    },






}, {timestamps: true})

module.exports = mongoose.model('newBook2',bookSchema);