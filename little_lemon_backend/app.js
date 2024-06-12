require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
bodyParser = require('body-parser');
const littleLemonData = require("./data_schema");
const cookieParser = require('cookie-parser');

app.use(cookieParser());


const allowedOrigins = [
    'http://localhost:3000',
    'http://192.168.1.73:3000'
  ];

  app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true
  }));
mongoose.connect("mongodb://localhost:27017/formdb").then(()=>{
    console.log("Connection established");
})

mongoose.Promise = global.Promise;
app.use(bodyParser.json());

const userRoutes = require('./routes/auth_user');

app.use('/auth_user',userRoutes);

const signRoutes = require('./routes/sign_user');

app.use('/sign_user',signRoutes);

const bookingRoutes = require('./routes/booking');

app.use('/booking',bookingRoutes);

const userStateRoutes = require('./routes/userRoute');

app.use('/auth',userStateRoutes);

app.listen(8081,()=>{
    console.log("Listening");
})



