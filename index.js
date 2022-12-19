const bodyParser = require("body-parser");
const express = require("express");
const {mongoose } = require("mongoose");
const app = express()

mongoose.connect(
    "mongodb+srv://drinksdb:drinksdb@cluster0.rodpjgd.mongodb.net/test"
)

app.use(bodyParser.json());

const drinksRoute = require("./routes/drinks")
const ingredientRoute = require("./routes/ingredients")
const categoriesRoute = require("./routes/categories")
const glassesRoute = require("./routes/glasses")


app.use('/drinks', drinksRoute)
app.use('/ingredient', ingredientRoute)
app.use('/category', categoriesRoute)
app.use('/glasses', glassesRoute)

module.exports = app;