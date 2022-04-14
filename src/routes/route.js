const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const bookModelSchema = require("../models/bookmodelschem")
// const RouterBookController = require("../controllers/routerController")


const authordetails = require("../models/authors")
const bookdetails = require("../models/books")


router.post("/createauthor",async function(req,res){

    const data = await authordetails.create(req.body)
    res.send({msg: data})

})

router.post("/createbook",async function(req,res){

    const data = await bookdetails.create(req.body)
    res.send({msg: data})

})


router.get("/getchetanbook",async function(req,res){

    const data = await authordetails.find({author_name: "Chetan Bhagat"})
    const id = data[0].author_id
    const bookname = await bookdetails.find({author_id: id}).select({name: 1, _id: 0})
    res.send({msg: bookname})

})



router.get("/updateprice",async function(req,res){

    const data = await bookdetails.find({name: "Two States"})
    const id = data[0].author_id
    const authorname = await bookdetails.find({author_id: id}).select({author_name: 1, _id: 0})
    const bookname = data[0].name
    const priceupdate = await bookdetails.findOneAndUpdate({name : bookname},{price: 100}, {new : true}).select({price: 1, id:0})
    res.send({msg: authorname,priceupdate})

})

router.get("/costbetween", async function(req,res){
    const data = await bookdetails.find({price: {$gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})
    const id = data.map(inp => inp.author_id)
    let arr = []
    for (let i = 0; i< id.length; i++){
        let k = id[i]
    const author = await authordetails.find({author_id: k}).select({author_name: 1, _id: 0})
    arr.push(author)
    }

    const authorname = arr.flat()
    res.send({msg: authorname})

})








// router.post("/createBook", RouterBookController.createBookUser)
// router.get("/bookgetinfo", RouterBookController.getBook)
// router.get("/getBookInYear", RouterBookController.getBookInYear);
// router.post("/getParticularBooks",RouterBookController.getParticularBooks)
// router.get("/getRandomBooks",RouterBookController.getRandomBooks)
// router.get("/getINRBooks",RouterBookController.getINRBooks)


















// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })
// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook)

// router.get("/getBooksData", BookController.getBooksData)



module.exports = router;