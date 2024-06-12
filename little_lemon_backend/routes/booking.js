const express = require('express');
const bookingRoute = express.Router();
const bookingData = require("../data_schema");
const auth = require('../middleware/auth_user')

bookingRoute.route('/addbooking').post(auth, (req, res) => {
    const { name, date, guests, timings } = req.body;
    const user = req.user;

    const formdata = new bookingData({
        name,
        date,
        guests,
        timings,
        user
    });

    formdata.save()
        .then(() => res.status(200).json({ message: "Booking added successfully" }))
        .catch(err => res.status(400).json({ message: err.message }));
});

bookingRoute.route('/').get(auth, (req, res) => {
    bookingData.find({ user: req.user })
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json({ message: err.message }));
});

bookingRoute.route('/delete/:id').delete(auth, (req, res) => {
    bookingData.findOneAndDelete({ _id: req.params.id, user: req.user })
        .then(() => res.status(200).send("Booking deleted successfully"))
        .catch(err => res.status(400).send(err));
});


module.exports = bookingRoute;
