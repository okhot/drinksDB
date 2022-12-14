const  mongoose = require("mongoose")

const categoriesSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model("categories", categoriesSchema)