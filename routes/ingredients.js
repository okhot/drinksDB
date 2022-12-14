const express = require("express")
const ingredientsModel = require("../api/ingredientsModel")
const { ingredientValidaation } = require("../validation/ingredientsValidation")
const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    ingredientsModel.find().exec().then((results) => {
        res.json(results)
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    ingredientsModel.findById(id).exec().then((results) => {
        res.json(results)
    })
})

router.post("/", (ingredientValidaation),(req, res) => {
    const ingredients = new ingredientsModel({
        "name" : req.body.name
    })
    ingredients.save().then(() => {
        res.send(ingredients)
    })
})

router.put("/:id", (ingredientValidaation), (req, res) => {
    const id = req.params.id
    ingredientsModel.findById(id).exec().then((results) => {
        results.name = req.body.name

        results.save().then(() => {
            res.json(results)
        })
    })
})

router.patch("/:id", (ingredientValidaation), (req, res) => {
    [check("title").if((value) => !!value).isLength({min: 1})]
    const id = req.params.id
    ingredientsModel.findById(id).exec().then((results) => {
        results.name = req.body.name || results.name
        results.save().then((results) => {
            res.json(results)
        })
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    ingredientsModel.deleteOne({_id: id}).exec().then((
        res.json("items was deleted")
    ))
})

module.exports = router