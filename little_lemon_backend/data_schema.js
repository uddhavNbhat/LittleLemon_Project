const mongoose = require('mongoose');
const user_schema = require('./user_schema');

const bookingSchema = new mongoose.Schema({
    name : String,
    date : String,
    guests : {
        type: Number,
        max: 20
    },
    timings : String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user_schema',
        required : true
    }
})

module.exports = mongoose.model("data_schema",bookingSchema);




