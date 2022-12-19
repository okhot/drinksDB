const express = require('express')
const { checkSchema } = require('express-validator')

const glassValidaation = checkSchema ({
    name: {
        isLength: {
            min: 1
        },
        errorMessage: "Please input glass name"
    }
})

module.exports = {glassValidaation}