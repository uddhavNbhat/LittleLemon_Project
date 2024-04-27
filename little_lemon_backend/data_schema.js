const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name : String,
    date : String,
    guests : {
        type: Number,
        max: 20
    },
    timings : String,
})

module.exports = mongoose.model("data_schema",bookingSchema);




