const mongoose = require('mongoose')

const Objectid = mongoose.Schema.types.Objectid

const developerSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum : ["male","female","other"]
    },

    percetage : Number,
    batch:{
        type: Objectid,
        ref: "Batch",
        require: true
    }
},{timestamps: true});

module.exports = mongoose.model("Developer",developerSchema)