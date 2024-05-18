const express = require('express');
const userRoute = express.Router();
const userData = require('../user_schema');
const auth = require('../middleware/auth_user');

userRoute.route('/userinfo').get(auth, async (req, res, next) => {
    try {
        const user = await userData.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ username: user.username });
    } catch (error) {
        next(error);
    }
});

module.exports = userRoute;
