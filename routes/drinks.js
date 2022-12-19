const express = require("express")
const { check } = require("express-validator")
const drinksModel = require("../api/drinksModel")
const { drinksValidation } = require("../validation/drinksValidation")
const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    const {isAlchoholic, ingredients, categories, glasses} = req.body;
    const query = {};

    // if(isAlchoholic != undefined) {
    //     query.isAlchoholic = isAlchoholic;
    // }

    // if(ingredients?.length) {
    //     query
    // }

    drinksModel.find().populate(["categories", "ingredients", "glasses"]).exec().then((results) => {
        res.json(results)
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    drinksModel.findById(id).populate("categories", "ingredients", "glasses").exec().then((results) => {
        res.json(results)
    })
})

router.post("/", (drinksValidation), (req, res) => {
    const drinks = new drinksModel({
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        categories: req.body.categories,
        glasses: req.body.glasses,
        isAlcoholic: req.body.isAlcoholic
    })
    drinks.save().then(() => {
        drinks.populate(['categories', 'ingredients', 'glasses'])
        res.send(drinks)
    })
})

router.put("/:id", (drinksValidation), (req, res) => {
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

router.patch("/:id", (drinksValidation), (req, res) => {
    [check("title").if((value) => !!value).isLength({min: 1}),
    check("description").if((value) => !!value).isLength({min: 1}),
    check("isAlcoholic").if((value) => !!value).isBoolean(true)
    ]
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