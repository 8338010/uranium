const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const UserModel = require("../models/userModel.js")

const UserController = require("../controllers/userController.js")

const lodesh = require('lodash')




router.post('/createUser', UserController.createUser );
router.get('/getUsersData', UserController.getUsersData );



// const randomController= require("../controllers/randomController.js")
// //write a post request to accept an element in post request body and add it to the given array and return the new array
// router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER















module.exports = router;
