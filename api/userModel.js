const express = require('express')
const { default: mongoose } = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

userSchema.set('timestamps', {
    creadetAt: "createdAt",
    updatedAt: "updatedAt"
})


module.exports = mongoose.model('user', userSchema)