const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
bodyParser = require('body-parser');
const littleLemonData = require("./data_schema");

app.use(cors());

mongoose.connect("mongodb://localhost:27017/formdb").then(()=>{
    console.log("Connection established");
})

mongoose.Promise = global.Promise;
app.use(bodyParser.json());

const bookingRoutes = require('./routes/booking');

app.use('/booking',bookingRoutes);

app.listen(8081,()=>{
    console.log("Listening");
})



