const express = require('express');
const userRoute = express.Router();
const userData = require('../user_schema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

userRoute.route('/signin').post(async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const validUser = await userData.findOne({ username });
        if (!validUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validPassword = await bcryptjs.compare(password, validUser.password);
        if (!validPassword) {
            return res.status(404).json({ message: 'Invalid password' });
        }

        if(validPassword){
            const token = jwt.sign({ id: validUser._id }, "littul_lemun", { expiresIn: '7d' });
            console.log("token is: " + token)
            const { password: hashedPassword, ...requiredinfo } = validUser.toObject();
            return res.status(200).json({ message: 'Login successful' });
        }


    } catch (error) {
        next(error);
    }
});


module.exports = userRoute;