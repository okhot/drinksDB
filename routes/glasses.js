const express = require("express")
const drinksModel = require("../api/drinksModel")
const glassesModel = require("../api/glassesModel")
const { glassValidaation } = require("../validation/glassesValidation")
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    glassesModel.find().exec().then((results) => {
        res.json(results)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    drinksModel.findById(id).exec().then((results) => {
        res.json(results)
    })
})

router.post('/', (glassValidaation), (req, res) => {
    const glasses = new glassesModel ({
        name: req.body.name
    })
    glasses.save().then(
        res.json(glasses)
    )
})

router.put('/:id', (glassValidaation), (req, res) => {
    const id = req.params.id
    drinksModel.findById().exec().then((result) => {
        result.name = req.body.name 

        result.save().then(() => {
            res.json(result)
        })
    })
})

router.patch('/:id', (glassValidaation),(req, res) => {
    check("title").if((value) => !!value).isLength({min: 1})]
    const id =  req.params.id
    drinksModel.findById().exec().then((results) => {
        results.name = req.body.name || results.name
    })    
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    drinksModel.deleteOne({_id: id}).exec().then(() => {
        res.json("Glass succefully deleted!")
    })
})

module.exports = router