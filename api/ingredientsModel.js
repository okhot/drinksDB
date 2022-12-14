const mongoose =  require('mongoose')

const ingredientSchema = mongoose.Schema({
    "name": String,
})

module.exports = mongoose.model('ingredient', ingredientSchema)