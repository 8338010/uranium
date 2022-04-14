const { count } = require("console")
const bookUserModel = require("../models/bookmodelschem")


const createBookUser = async (req,res) => {
    let data = req.body
    let userData = await bookUserModel.create(data);
    res.send({msg: userData})
}

const getBook = async (req,res) => {

    let userData = await bookUserModel.find().select({bookNmae:1, authorName:1,_id:0})
    res.send({msg: userData})
}


const getBookInYear = async (req,res) => {
    let data = req.body.year

    let allbooks = await bookUserModel.find({year:{$eq:data}});
    res.send({msg: allbooks})
}


const getParticularBooks = async (req,res) => {
    let data = req.body

    let allbooks = await bookUserModel.find(data);
    res.send({msg: allbooks})
}

const getINRBooks= async function (req, res) {

    let allXINRBooks= await BookModel.find( { 'price.indianPrice' : { $in: [ '100INR' , '200INR', '500INR' ]  }} )
    
    res.send({msg: allXINRBooks})
}

const getRandomBooks= async function (req, res) {

    let randomBooks= await BookModel.find({ $or:[{stockAvailable :{ $eq:true}},{totalPages:{ $gt:500 }} ] })
    res.send({msg: randomBooks})
}



module.exports.createBookUser = createBookUser;
module.exports.getBook = getBook;
module.exports.getBookInYear = getBookInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getINRBooks = getINRBooks;
module.exports.getRandomBooks = getRandomBooks;