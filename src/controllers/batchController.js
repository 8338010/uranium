const batcModel = require('../models/batchModel')


const createBatches = async function(req, res){
    let data = req.body

    if(! await batcModel.exists(data)){
        let createdBatch = await batcModel.create(data)
        res.send({msg: createdBatch })
    }else{
        res.send({msg: "this batch alredy  exist"})
    }

}


module.exports = {createBatches}