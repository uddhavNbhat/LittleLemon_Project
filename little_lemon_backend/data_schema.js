const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name : String,
    date : String,
    guests : {
        type: Number,
        max: 10
    }
})

module.exports = mongoose.model("data_schema",bookingSchema);