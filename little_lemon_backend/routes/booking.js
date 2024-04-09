const express = require('express');
const app = express();

const bookingRoute = express.Router();

let bookingData = require("../data_schema");

bookingRoute.route('/').get((req,res)=>{
    bookingData.find((err,bdata) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(bdata);
        }
    })
})

bookingRoute.route('/addbooking').post((req,res)=>{
    let name = req.body.name;
    let date = req.body.date;
    let guests = req.body.guests;
    let formdata = new bookingData({
        name,
        date,
        guests
    });
    formdata.save().then(()=>{
        res.status(200);
    })
})
module.exports = bookingRoute;

