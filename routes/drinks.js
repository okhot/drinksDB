const express = require("express")
const drinksModel = require("../api/drinksModel")
const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    drinksModel.find().populate(["categories", "ingredients"]).exec().then((results) => {
        res.json(results)
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    drinksModel.findById(id).exec().then((results) => {
        res.json(results)
    })
})

router.post("/", (req, res) => {
    const drinks = new drinksModel({
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.description,
        isAlcoholic: req.body.isAlcoholic
    })
    drinks.save().then(() => {
        res.send(drinks)
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    drinksModel.findById(id).exec().then((results) => {
        results.title = req.body.title,
        results.description = req.body.description,
        results.isAlcoholic = req.body.isAlcoholic,
        results.category = req.body.category,
        results.ingredients = req.body.ingredients

        results.save().then(() => {
            res.json(results)
        })
    })
})

router.patch("/:id", (req, res) => {
    const id = req.params.id
    drinksModel.findById(id).exec().then((results) => {
        results.title = req.body.title || results.title
        results.description = req.body.description || results.description
        results.isAlcoholic = req.body.isAlcoholic || results.isAlcoholic
        results.category = req.body.category || results.category
        results.ingredients = req.body.ingredients || results.ingredients

        results.save().then(() => {
            res.json(results)
        })
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    drinksModel.deleteOne({_id: id}).exec().then(() => {
        res.json("Drink successfully deleted")
    }) 
})

module.exports = router