const { Session } = require('inspector');
const { unique } = require('jquery');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true,
    },

    password : {
        type : String,
        required : true,
    },
    sessions : [
        {
        token : {type : String, required: true},
        expiresAt: {type : Date, required: true}
        }
    ]
})

module.exports = mongoose.model("user_schema",userSchema);
