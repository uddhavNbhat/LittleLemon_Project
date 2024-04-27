const express = require('express');
const bcryptjs = require('bcryptjs');

const userRoute = express.Router();

const userData = require('../user_schema');

userRoute.route('/signup').post(async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await userData.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "Username already exists" });
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);

        const userdata = new userData({
            username,
            password: hashedPassword
        });

        await userdata.save();
        console.log(userdata);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = userRoute;


