const mongoose = require('mongoose')

const glassesModel = mongoose.Schema({
    "name" : String
})

module.exports = mongoose.model("glasses", glassesModel)