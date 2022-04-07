const express = require('express');
const welcome = require('../logger/logger')
const helperModul = require('../util/helper')
const formulaToString = require('../validator/formatter')
const lodash = require('lodash')


const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    welcome.welcome()
    helperModul.printTodayDate()
    helperModul.printgetBatchinfo()
    helperModul.printTodayMonth()

    formulaToString.trimString()
    formulaToString.changeCaseToLower()
    formulaToString.changeCaseToUpper()
});
router.get('/hello', function (req, res) {
    // Problem a)
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let subArrays = lodash.chunk(months, 3)
    console.log('The result after splitting the months array is ', subArrays)
    
    // Problem b)
    
    let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
    console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNumbers))
    
    // Problem c)
    let a = [1 , 2, 1, 4]
    let b = [2, 3, 4, 3]
    let c = [6, 1, 5, 10]
    let d = [1, 1, 1]
    let e = [1, 2, 3, 4, 5]
    
    console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))
    
    // Problem d)
    let arrayOfKeyValuePairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
        res.send('My hello api!')
    });
    
module.exports = router;
// adding this comment for no reason



