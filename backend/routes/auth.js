const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);

    if (error) {
        const errors = error.details.map(errorObject => errorObject.message);
        return res.status(400).send(`Error(s): ${errors.join(', ')}`);
    }

    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send('Invalid Email or Password.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid Email or Password.');
    }

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, '_id', 'username', 'isShipper', 'isCourier', 'city', 'state'));
});

function validate(req) {
    const schema = {
        username: Joi.string().min(6).max(30).required(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req.body, schema);
}

module.exports = router;