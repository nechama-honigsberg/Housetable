const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({

    address: {
        type: String,
    },
    currentValue: {
        type: Number,
    },
    loanAmount: {
        type: Number,
    },
    risk: {
        type: Number,
    },
})

module.exports = mongoose.model('House', houseSchema)