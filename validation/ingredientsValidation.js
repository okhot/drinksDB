const express = require('express')
const { checkSchema } = require('express-validator')

const ingredientValidaation = checkSchema({
    name: {
        isLength: {
            options: {min: 1},
            errorMessage: "Please enter Ingredient name"
        }
    }
})

module.exports = {ingredientValidaation}