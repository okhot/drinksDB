const mongoose = require("mongoose")

const drinkSchema = mongoose.Schema({
    title: String,
    description: String,
    isAlcoholic: Boolean,
    categories: [{type: mongoose.Types.ObjectId,  ref: "categories"}],
    ingredients: [{type: mongoose.Types.ObjectId,  ref: "ingredient"}]
})

drinkSchema.set ("timestamps", {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
})

module.exports = mongoose.model('drinks', drinkSchema)