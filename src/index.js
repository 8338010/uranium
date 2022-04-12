const express = require('express');
const mongoose = require('mongoose');


var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://suraj833:suraj833@cluster0.rlkuk.mongodb.net/suraj",
{useNewUrlParser : true 

})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
console.log('Express app running on port ' + (process.env.PORT || 3000))
});
