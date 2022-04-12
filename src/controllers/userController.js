const UserModel = require("../models/userModel.js")


const createUser = async function (req, res){
     var data = req.body
     let saveDate = await UserModel.create(data)
     res.send({msg: saveDate})



}


const getUsersData = async function (req, res){
    let allUsers = await UserModel.find()
    res.send({msg : allUsers})

}

module.exports.createUser = createUser
module.exports.getUsersData = getUsersData