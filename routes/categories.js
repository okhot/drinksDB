const express = require('express')
const { request } = require('..')
const categoriesModel = require('../api/categoriesModel')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    categoriesModel.find().exec().then((results) => {
        res.json(results)
    })
})

router.get('/:id', (req, res) => {
    const id =  req.params.id
    categoriesModel.findById(id).exec().then((results) => {
        res.json(results)
    })
})

router.post('/', (req, res) => {
    const categories = new categoriesModel({
        "name" : req.body.name
    })
    categories.save().then(() => {
        res.send(categories)
    })
})

router.put('/:id', (req, res) => {
    const id =  req.params.id
    categoriesModel.findById(id).exec().then((results) => {
        results.name = req.body.name

        results.save().then(() => 
        res.json(results))
    })

})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    categoriesModel.findById(id).exec().then((results) => {
        results.name = req.body.name || results.name

        results.save().then(() => {
            res.json(results)
        })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    categoriesModel.deleteOne({_id: id}).exec().then(() => {
        res.json("Items was deleted")
    })
})

module.exports = router