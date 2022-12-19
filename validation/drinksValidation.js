const express = require('express')
const { checkSchema } = require('express-validator')

const drinksValidation = checkSchema ({
    title: {
        errorMessage: "Please Enter Drinks Title",
        isLength: {
            options: {min: 1, max: 30}
        }
    },
    
    description: {
        errorMessage: "Please Input a decription",
        isLength: {
            options: {
                min: 1, max: 60
            }
        }
    },

    isAlcoholic: {
        isBoolean: true,
        errorMessage: "Please Select One"
    },
})

module.exports = {drinksValidation}