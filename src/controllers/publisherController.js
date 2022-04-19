const Publicsher = require('../models/publisherModel')

const addPublisher = async function(req, res){

    let getPublicsherData = req.body;

    let showEntryData = await Publicsher.create(getPublicsherData);

    res.send({data: showEntryData, status: true});

}

module.exports.addPublisher = addPublisher;