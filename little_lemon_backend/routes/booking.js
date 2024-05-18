const express = require('express');
const bookingRoute = express.Router();
const bookingData = require("../data_schema");
const auth = require('../middleware/auth_user')

bookingRoute.route('/addbooking').post(auth, (req, res) => {
    let name = req.body.name;
    let date = req.body.date;
    let guests = req.body.guests;
    let timings = req.body.timings;
    const user = req.user;
        let formdata = new bookingData({
            name,
            date,
            guests,
            timings,
            user
        });
        formdata.save()
            .then(() => {
                res.status(200).json({ message: "Booking added successfully" });
            })
            .catch(err => res.status(400).json({ message: err.message }));

});

bookingRoute.route('/').get(auth,(req, res) => {
        bookingData.find({user : req.user})
            .then(booking => res.json(booking))
            .catch(err => res.status(400).json({ message: err.message }));
    }
);

bookingRoute.route('/delete/:id').delete(auth, (req, res) => {
        bookingData.findByIdAndDelete({ _id: req.params.id , user: req.user })
            .then(() => {
                console.log("Booking deleted");
                res.status(200).send("Booking deleted successfully");
            })
            .catch(err => {
                console.error(err);
                res.status(400).send(err);
            });

});

module.exports = bookingRoute;
