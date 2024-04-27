const express = require('express');
const bookingRoute = express.Router();
const bookingData = require("../data_schema");

bookingRoute.route('/addbooking').post((req, res) => {
    let name = req.body.name;
    let date = req.body.date;
    let guests = req.body.guests;
    let timings = req.body.timings;
        let formdata = new bookingData({
            name,
            date,
            guests,
            timings,
        });
        formdata.save()
            .then(() => {
                res.status(200).json({ message: "Booking added successfully" });
            })
            .catch(err => res.status(400).json({ message: err.message }));

});

bookingRoute.route('/').get((req, res) => {
        bookingData.find({})
            .then(booking => res.json(booking))
            .catch(err => res.status(400).json({ message: err.message }));
    }
);

bookingRoute.route('/delete/:id').delete((req, res) => {
        bookingData.findByIdAndDelete({ _id: req.params.id })
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
