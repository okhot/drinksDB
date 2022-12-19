const express = require('express')
const { checkSchema } = require('express-validator')

const categoriesValidation = checkSchema ({
    name: {
        errorMessage: "Please enter category",
        isLength: {
            options: {min: 1, max: 30}
        }
    }
})

module.exports = {categoriesValidation}